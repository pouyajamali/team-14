function assert(condition, message) {
	if(!condition){
		message=message || "Assertion Failed"
	}
	if(typeof Error !== "undefined"){
		throw new Error(message);
	}
	throw message;
}
function binaryToHex (opcode){
	var temp = (opcode).toString(16).toUpperCase()
	var addLine = 4-temp.length()
	var pad=""
	for(var i =0; i<addLine;i++){
		pad+="0"
	}
	var hexString = "0x"+=pad+temp
	return hexString;
}
var FONTS = [
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

Processor = {
	SET_REGISTER: new Unit8Array(16),
	REFRESH_RATE: 16,
	DELAY_REGISTER: 0,
	SOUND_REGISTER: 0,
	PC: 0,
	SP: 0,
	I: 0,
	STACK: new Unit16Array(16),
	MEMORY: new Unit8Array(4096),
	VRAM:new Unit8Array(64*32),
	KEYBOARD_BUFFER: new Unit8Array(16),
	PROGRAM_LOADED: false,
	DRAW_FLAG: flase,
	SCREEN: null,
	CANVAS: null,
	KEY_PRESSED: false,
	INTERVAL: null,
	UpdateTimers: function(){
		if(Processor.DELAY_REGISTER>0){
			Processor.DELAY_REGISTER--;
		}
		if(Processor.SOUND_REGISTER>0){
			Processor.SOUND_REGISTER--;
		}
		if(Processor.SOUND_REGISTER==1){
			var send = new Audio("beepLight.wav")
			send.play();
			console.log("BEEP!\n");
		}
	},
	Reset: function()
	{
	  Processor.PC=0x200;
	  Processor.ClearVRAM()
	  Processor.I = 0
	  Processor.STACK = Processor.STACK.map( ()=> 0 );
	  Processor.SP = 0;
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
	OnKey: function(evt){
		var charStr = String.fromCharCode(evt.which);
  		var value   = (evt.type == 'keydown') ? true : false;
  		idx = {
  			'1': 0x1,'2': 0x2,'3': 0x3,'4': 0x4,
    		'Q': 0x4,'W':0x5,'E': 0x6,'R': 0xD,
    		'A': 0x7,'S':0x8,'D': 0x9,'F': 0xE,
    		'Z': 0xA,'X':0x0,'C': 0xB, 'V':0xF,
  		}[charStr];

  		if(idx != undefined)
  		{
  			Processor.KEYBOARD_BUFFER[idx]=value
  		}
  		Processor.KEY_PRESSED=Processor.KEYBOARD_BUFFER.reduce(((prevValue,currentValue) => (prevValue | currentValue)))
  	},
  	ClearVRAM : function()
  	{
  		Processor.VRAM=Processor.VRAM.map(()=>0);
  	}
  	LoadProgram: function(file){
  		var reader = new FileReader();
  		reader.addEventListener("Loadend",function()
  		{
  			var buffer = new Unit8Array(reader.result);
  			Processor.LoadProgramBuffer(buffer);
  		});
  		reader.readArrayBuffer(file);
  	},
 	
 	LoadProgramBuffer: function(buffer){
	    buffer.map((val,idx)=> Processor.MEMORY[idx + 512] = buffer[idx] )
	    Processor.PC = 512;
	    Processor.PROGRAM_LOADED = true;
	},

	Exec: function(opcode){
	    return {
	    	'0x0000':function( opcode)
	    {
	      return {
	        '0x0000': C8_clearScreen,
	        '0x000E': C8_return,
	      }[ConvertToHexStr(opcode & 0x000F)];
	    },
	    '0x1000':C8_jumpToAdress,
	    '0x2000':C8_callFunction,
	    '0x3000':C8_skipNextInstructionVXeqNN,
	    '0x4000':C8_skipNextInstructionVXneqNN,
	    '0x5000':C8_skipNextInstructionVXeqVY,
	    '0x6000':C8_SetRegisterVXtoNN,
	    '0x7000':C8_AddNNtoVX,
	    '0x8000':function ( opcode)
	    {
	        return {
	            '0x0000':C8_SetVXtoVY,
	            '0x0001':C8_SetVXtoVXorVY,
	            '0x0002':C8_SetVXtoVXandVY,
	            '0x0003':C8_SetVXtoVXxorVY,
	            '0x0004':C8_AddVYtoVX,
	            '0x0005':C8_SubstractVYfromVX,
	            '0x0006':C8_ShiftVXRight,
	            '0x0007':C8_SetVXtoVYminusVX,
	            '0x000E':C8_ShiftVXLeft,
	          }[ConvertToHexStr(opcode & 0x000F)];
	    },
	    '0x9000':C8_skipNextInstructionVXneqVY,
	    '0xA000':C8_SetItoAdress,
	    '0xB000':C8_JumpToAdressPlusV0,
	    '0xC000':C8_SetVxToRandomAndNN,
	    '0xD000':C8_DrawSprite,
	    '0xF000':function(opcode)
	    {
	      return {
	        '0x0007':C8_SetVXtoDelayRegister,
	        '0x000A':C8_WaitKeyPressAndStoreInVX,
	        '0x0015':C8_SetDelayRegisterToVX,
	        '0x0018':C8_SetSoundRegisterToVX,
	        '0x001E':C8_AddVXtoI,
	        '0x0029':C8_SetIToLocationOfSpriteFromVX,
	        '0x0033':C8_StoreBCDofVXatI,
	        '0x0055':C8_StoreV0toVXInMemoryStartingAtI,
	        '0x0065':C8_FillV0toVXWithValuesFromMemoryAtI,
	      }[ConvertToHexStr(opcode & 0x00FF)];
	    },
	    '0xE000':function(opcode)
	    {
	      return{
	        '0x009E':C8_SkipNextInstructionIfTheKeyStoredInVXisPressed,
	        '0x00A1':C8_SkipNextInstructionIfTheKeyStoredInVXisNOTPressed,
	      }[ConvertToHexStr(opcode & 0x00FF)];
	    }
	 }[ConvertToHexStr(opcode & 0xF000)];
	},

	RunCycle : function(){
		var opcode = Processor.MEMORY[Processor.PC] << 8 | Processor.MEMORY[Processor.PC + 1]
		var op = Processor.Exec(opcode);
		while(op !== undefined){
			op=op(opcode);
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

