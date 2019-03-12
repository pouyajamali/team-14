//Function to test code and get error message
function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}

//Function to convert binary value to hex(4 digits fixed)
function ConvertToHexStr(opcode)
{
  var tempStr = (opcode).toString(16).toUpperCase()
  var addln = 4 - tempStr.length
  var pad =""
  for(var i = 0; i< addln; i++)
  {
    pad = pad + "0"
  }
  var retStr = "0x"+ pad + tempStr
  return retStr;
}

//Function to keep scroll bar at bottom when appending elements
function updateScroll(){
    var element = document.getElementById("opcode");
    element.scrollTop = element.scrollHeight;
}

//Array storing bitmap font for emulator.
var CHIP8_FONTSET =[
  0xF0, 0x90, 0x90, 0x90, 0xF0, // 0
  0x20, 0x60, 0x20, 0x20, 0x70, // 1
  0xF0, 0x10, 0xF0, 0x80, 0xF0, // 2
  0xF0, 0x10, 0xF0, 0x10, 0xF0, // 3
  0x90, 0x90, 0xF0, 0x10, 0x10, // 4
  0xF0, 0x80, 0xF0, 0x10, 0xF0, // 5
  0xF0, 0x80, 0xF0, 0x90, 0xF0, // 6
  0xF0, 0x10, 0x20, 0x40, 0x40, // 7
  0xF0, 0x90, 0xF0, 0x90, 0xF0, // 8
  0xF0, 0x90, 0xF0, 0x10, 0xF0, // 9
  0xF0, 0x90, 0xF0, 0x90, 0x90, // A
  0xE0, 0x90, 0xE0, 0x90, 0xE0, // B
  0xF0, 0x80, 0x80, 0x80, 0xF0, // C
  0xE0, 0x90, 0x90, 0x90, 0xE0, // D
  0xF0, 0x80, 0xF0, 0x80, 0xF0, // E
  0xF0, 0x80, 0xF0, 0x80, 0x80  // F
];

//Definition of Processor object
Processor =
{
REGISTER_SET: new Uint8Array(16), // V_0 -> V_F
REFRESH_RATE:16, // refresh rate for sound and delay timers
DELAY_REGISTER: 0,
SOUND_REGISTER: 0,
PC: 0, // program counter
SP: 0, // stack pointer
I:0, //adress pointer
STACK: new Uint16Array(16), // Stack
MEMORY: new Uint8Array(4096), // RAM + ROM
VRAM: new Uint8Array(64 * 32), // Video memory
KEYBOARD_BUFFER: new Uint8Array(16), // Keyboard buffer
PROGRAM_LOADED: false, // gets set to true when the program is loaded in memory
DRAW_FLAG: false, // gets set whenever a draw operation gets called
SCREEN:null,
CANVAS:null,
KEY_PRESSED:false, // gets set whenever a key is pressed
INTERVAL:null,
UpdateTimers: function() //Function within processor to update timer
{
  if(Processor.DELAY_REGISTER >0)
     Processor.DELAY_REGISTER--;

 if(Processor.SOUND_REGISTER >0)
     Processor.SOUND_REGISTER--;

 if(Processor.SOUND_REGISTER == 1)
 {
       var snd = new Audio("beepLight.wav"); // buffers automatically when created
       snd.play();
       console.log("BEEP!\n");
 }
},

//Reset function to set all variables to 0, start timers and load fontset
Reset: function()
{
  Processor.PC = 0x200;
  // Clear VRAM
  Processor.ClearVRAM()
  // Set I address to 0
  Processor.I = 0
  // Clear stack
  Processor.STACK = Processor.STACK.map( ()=> 0 );
  Processor.SP = 0;
  // Clear registers V0-VF
  Processor.REGISTER_SET = Processor.REGISTER_SET.map( ()=> 0 );
  // Clear memory
  Processor.MEMORY = Processor.MEMORY.map(()=> 0 );
  // Load fontset
  CHIP8_FONTSET.map((val,idx) => Processor.MEMORY[idx] = CHIP8_FONTSET[idx]);
  // Clear keyboard buffer
  Processor.KEYBOARD_BUFFER = Processor.KEYBOARD_BUFFER.map(()=> 0 );
  // Set Draw flag to false
  Processor.DRAW_FLAG = false;
  // Get the "screen"
  Processor.CANVAS = document.getElementById('screen').getContext('2d');
  // Hook into the keyboard
  document.onkeyup = document.onkeydown = Processor.OnKey;

  // Reset timers
  Processor.DELAY_REGISTER =  0;
  Processor.SOUND_REGISTER =  0;
  if(Processor.INTERVAL != null)
    clearInterval(Processor.INTERVAL);
  Processor.INTERVAL = setInterval(Processor.UpdateTimers,Processor.REFRESH_RATE);
},

//Gets unicode from pressed key, sets KEY_PRESSED in Processor object appropriately,  and stores unicode in Processor.KEYBOARD_BUFFER
OnKey: function(evt)
{
  var charStr = String.fromCharCode(evt.which);
  var value   = (evt.type == 'keydown') ? true : false;

  idx =
  {
    '1': 0x1,'2': 0x2,'3': 0x3,'4': 0x4,
    'Q': 0x4,'W':0x5,'E': 0x6,'R': 0xD,
    'A': 0x7,'S':0x8,'D': 0x9,'F': 0xE,
    'Z': 0xA,'X':0x0,'C': 0xB, 'V':0xF,
  }[charStr];

  if(idx !== undefined)
  {
    Processor.KEYBOARD_BUFFER[idx] = value;
  }

  Processor.KEY_PRESSED = Processor.KEYBOARD_BUFFER.reduce( ((prevValue,currentValue) => (prevValue | currentValue)) )

},

//Clears vram(sets all to 0)
ClearVRAM : function()
{
	  Processor.VRAM = Processor.VRAM.map( ()=> 0 );
},

//Loads file (Creates new array of 8 bit integers containing file's contents, then calls LoadProgramBuffer function on Processor with newly created array(buffer) as parameter)
LoadProgram: function(filename)
{
  var reader = new FileReader();
  reader.addEventListener("loadend", function()
  {
    var buffer = new Uint8Array(reader.result);
    Processor.LoadProgramBuffer(buffer);
  });

  reader.readAsArrayBuffer(filename);
},

//Sets program counter at 512(Bottom 512 bytes never used for programs, reserved for interpreter), maps buffer (8 bit array containing input file contents) to appropriate memory location
LoadProgramBuffer: function(buffer)
{
    buffer.map((val,idx)=> Processor.MEMORY[idx + 512] = buffer[idx] )
    Processor.PC = 512;
    Processor.PROGRAM_LOADED = true;
},

//Mapping of Operations using objects literals and functions
Exec: function(opcode)
{
  return {
    '0x0000':function( opcode){
      return {
        '0x0000': display_clear,
        '0x000E': return_routine,
      }[ConvertToHexStr(opcode & 0x000F)];
    },
    '0x1000': jumpToNNN,
    '0x2000': callFunction,
    '0x3000': skipNIVXeqNN,
    '0x4000': skipNIVXneqNN,
    '0x5000': skipNIVXeqVY,
    '0x6000': setRegVXtoNN,
    '0x7000': addNNtoVX,
    '0x8000':function ( opcode){
        return {
            '0x0000':setVXtoVY,
            '0x0001':setVXtoVXorVY,
            '0x0002':setVXtoVXandVY,
            '0x0003':setVXtoVXxorVY,
            '0x0004':addVYtoVX,
            '0x0005':substractVYfromVX,
            '0x0006':shiftVXRight,
            '0x0007':setVXtoVYminusVX,
            '0x000E':shiftVXLeft,
          }[ConvertToHexStr(opcode & 0x000F)];
    },
    '0x9000': skipNIVXneqVY,
    '0xA000': setItoAdress,
    '0xB000': jumpToAdressPlusV0,
    '0xC000': setVxToRandomAndNN,
    '0xD000': drawSprite,
    '0xF000':function(opcode)
    {
      return {
        '0x0007':setVXtoDR,
        '0x000A':waitForKey,
        '0x0015':setDRToVX,
        '0x0018':setSRToVX,
        '0x001E':addVXtoI,
        '0x0029':setIToLocationOfSpriteFromVX,
        '0x0033':storeBCDofVXatI,
        '0x0055':storeV0toVXInMemory,
        '0x0065':fillV0toVXWithMemory,
      }[ConvertToHexStr(opcode & 0x00FF)];
    },
    '0xE000':function(opcode)
    {
      return{
        '0x009E': skipNIIfKeyInVXPressed,
        '0x00A1': skipNIIfKeyInVXNOTPressed,
      }[ConvertToHexStr(opcode & 0x00FF)];
    }
 }[ConvertToHexStr(opcode & 0xF000)];
},

RunCycle: function()
{
  // Fetch opcode
  var opcode = Processor.MEMORY[Processor.PC] << 8 | Processor.MEMORY[Processor.PC+ 1]
  var op     = Processor.Exec(opcode);
  //prints opcode being executed
  var para = document.createElement("P");
  var t = document.createTextNode(ConvertToHexStr(opcode));
  para.appendChild(t);
  document.getElementById("opcode").appendChild(para);

  document.getElementById("function").innerHTML=op.name;

  document.getElementById("programcounter").innerHTML=Processor.PC;

  document.getElementById("addresspointer").innerHTML=Processor.I;

  document.getElementById("v0").innerHTML=Processor.REGISTER_SET[0];
  document.getElementById("v1").innerHTML=Processor.REGISTER_SET[1];
  document.getElementById("v2").innerHTML=Processor.REGISTER_SET[2];
  document.getElementById("v3").innerHTML=Processor.REGISTER_SET[3];
  document.getElementById("v4").innerHTML=Processor.REGISTER_SET[4];
  document.getElementById("v5").innerHTML=Processor.REGISTER_SET[5];
  document.getElementById("v6").innerHTML=Processor.REGISTER_SET[6];
  document.getElementById("v7").innerHTML=Processor.REGISTER_SET[7];
  document.getElementById("v8").innerHTML=Processor.REGISTER_SET[8];
  document.getElementById("v9").innerHTML=Processor.REGISTER_SET[9];
  document.getElementById("vA").innerHTML=Processor.REGISTER_SET[10];
  document.getElementById("vB").innerHTML=Processor.REGISTER_SET[11];
  document.getElementById("vC").innerHTML=Processor.REGISTER_SET[12];
  document.getElementById("vD").innerHTML=Processor.REGISTER_SET[13];
  document.getElementById("vE").innerHTML=Processor.REGISTER_SET[14];
  document.getElementById("vF").innerHTML=Processor.REGISTER_SET[15];






  updateScroll();

  while(op !== undefined)
  {

    op = op(opcode);

  }

},
DebugRender: function()
{
  if(Processor.DRAW_FLAG == false)
    return;
  Processor.CANVAS.fillStyle = "rgba(220, 220,220, 0.5)";
	Processor.CANVAS.fillRect(0, 0, 64*15, 32*15);
	Processor.CANVAS.fillStyle = "#FF9100";

	for(var i = 0 ; i < Processor.VRAM.length ; i++)
  {
		if(Processor.VRAM[i]  == 1)
    {
			var y = i/64 | 0;
			var x = i - y*64;

			Processor.CANVAS.fillRect(x*15,y*15,15,15);
		}
	}
  Processor.DRAW_FLAG = false;
}

}
