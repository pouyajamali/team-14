//cleardisplay screen
function display_clear(opcode)
{
  Processor.ClearVRAM();
  Processor.DRAW_FLAG = true;
  Processor.PC += 2;
}
//return to previous routine
function return_routine(opcode)
{
  --Processor.SP;
  Processor.PC = Processor.STACK[Processor.SP];
  Processor.PC += 2;
}
//jump to address at NNN
function jumpToNNN(opcode)
{
   Processor.PC = opcode & 0x0FFF;
}
//go to next function
function callFunction(opcode)
{
  Processor.STACK[Processor.SP] = Processor.PC;
  ++Processor.SP;
  Processor.PC = opcode & 0x0FFF;
}
//if Vx = NN skip next instruction
function skipNIVXeqNN(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] == (opcode & 0x00FF))
    Processor.PC += 4;
  else
    Processor.PC += 2;
}
//if Vx != NN then skip next instruction
function skipNIVXneqNN(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] != (opcode & 0x00FF))
      Processor.PC += 4;
    else
      Processor.PC += 2;
}
//if Vx = Vy skip next instruction
function skipNIVXeqVY(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] == Processor.REGISTER_SET[(opcode & 0x00F0) >> 4])
      Processor.PC += 4;
    else
      Processor.PC += 2;
}
//set Vx to NN
function setRegVXtoNN(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] = opcode & 0x00FF;
  Processor.PC += 2;
}
//add NN to value in Vx
function addNNtoVX(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] += opcode & 0x00FF;
  Processor.PC += 2;
}
//make Vx equal to Vy
function setVXtoVY(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] = Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}
//do bitwise OR operation on Vx and Vy and store in Vx
function setVXtoVXorVY(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] |= Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}
//do bitwise AND operation on Vx and Vy and store in Vx
function setVXtoVXandVY(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] &= Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}
//do bitwise XOR on Vx and Vy and store in Vx
function setVXtoVXxorVY(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] ^= Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}
// add Vx and Vy together and store in Vx
//if greater than 8 bits set VF to 1
function addVYtoVX(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x00F0) >> 4] > (0xFF - Processor.REGISTER_SET[(opcode & 0x0F00) >> 8]))
    Processor.REGISTER_SET[0xF] = 1; //carry
  else
    Processor.REGISTER_SET[0xF] = 0;
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] += Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}

//subtract Vy from Vx and set Vx to outcome
//if Vy > then Vx then set VF to 0 indicating a borrow
function substractVYfromVX(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x00F0) >> 4] > Processor.REGISTER_SET[(opcode & 0x0F00) >> 8])
    Processor.REGISTER_SET[0xF] = 0; // there is a borrow
  else
    Processor.REGISTER_SET[0xF] = 1; // no borrow
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] -= Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}

//shift Vx to the right by 1
//set VF to same as right most bit of Vx before shift
function shiftVXRight(opcode)
{
  Processor.REGISTER_SET[0xF] = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] & 0x1;
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] >>= 1;
  Processor.PC += 2;
}
//subtract Vx from Vy and set Vx to outcome
//if Vx > Vy then set VF to 0 indication a borrow
function setVXtoVYminusVX(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] > Processor.REGISTER_SET[(opcode & 0x00F0) >> 4])	// VY-VX
    Processor.REGISTER_SET[0xF] = 0; // there is a borrow
  else
    Processor.REGISTER_SET[0xF] = 1;
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] = Processor.REGISTER_SET[(opcode & 0x00F0) >> 4] - Processor.REGISTER_SET[(opcode & 0x0F00) >> 8];
  Processor.PC += 2;
}
//shift Vx to the left by 1
//set VF to same value of left most bit of Vx before shift
function shiftVXLeft(opcode)
{
  Processor.REGISTER_SET[0xF] = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] >> 7;
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] <<= 1;
  Processor.PC += 2;
}
//skip next instruction if Vx != Vy
function skipNIVXneqVY(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] != Processor.REGISTER_SET[(opcode & 0x00F0) >> 4])
    Processor.PC += 4;
  else
    Processor.PC += 2;
}
//set register I to NNN
function setItoAdress(opcode)
{
  Processor.I = opcode & 0x0FFF;
  Processor.PC += 2;
}
//jump to location NNN + V0
function jumpToAdressPlusV0(opcode)
{
    Processor.PC = (opcode & 0x0FFF) + Processor.REGISTER_SET[0];
}
//set Vx to bitwise operation random byte AND NN
function setVxToRandomAndNN(opcode)
{
  var regidx = (opcode & 0xF00) >>> 8;
  var add = opcode & 0x0FF;

  Processor.REGISTER_SET[regidx] = (Math.random()*256) & add;

  Processor.PC += 2;
}

//draw sprites from memory at location Vx, Vy
function drawSprite(opcode)
{
  var x = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8];
  var y = Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  var height = opcode & 0x000F;
  var pixel;

  Processor.REGISTER_SET[0xF] = 0;
  for (var yline = 0; yline < height; yline++)
  {
    pixel = Processor.MEMORY[Processor.I + yline];

      for(var xline = 0; xline < 8; xline++)
      {
        if((pixel & (0x80 >> xline)) != 0)
        {
            if(Processor.VRAM[(x + xline + ((y + yline) * 64))] == 1)
              Processor.REGISTER_SET[0xF] = 1;
            Processor.VRAM[x + xline + ((y + yline) * 64)] ^= 1;
        }
      }
  }

  Processor.DRAW_FLAG = true;
  Processor.PC += 2;
}
//skip next instruction og key value stored in Vx is pressed
function skipNIIfKeyInVXPressed(opcode)
{
  if(Processor.KEYBOARD_BUFFER[Processor.REGISTER_SET[(opcode & 0x0F00) >> 8]] != 0)
    Processor.PC += 4;
  else
    Processor.PC += 2;
}
//skip next instrutction if key vlaue stored in Vx is not pressed
function skipNIIfKeyInVXNOTPressed(opcode)
{
  if(Processor.KEYBOARD_BUFFER[Processor.REGISTER_SET[(opcode & 0x0F00) >> 8]] == 0)
    Processor.PC += 4;
  else
    Processor.PC += 2;
}
//set Vx to delay timer value
function setVXtoDR(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] = Processor.DELAY_REGISTER;
  Processor.PC += 2;
}
//wait for key press then store in Vx
function waitForKey(opcode)
{
  var keyPress = false;
  for(var i = 0; i < 16; ++i)
  {
    if(Processor.KEYBOARD_BUFFER[i] != 0)
    {
      Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] = i;
      keyPress = true;
    }
  }

  if(!keyPress)
    return;
  Processor.PC += 2;
}
//set delay time = Vx
function setDRToVX(opcode)
{
  Processor.DELAY_REGISTER = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8];
  Processor.PC += 2;
}
//set sound timer - Vx
function setSRToVX(opcode)
{
  Processor.SOUND_REGISTER = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8];
  Processor.PC += 2;
}
//add Vx to I and store in I
function addVXtoI(opcode)
{
  if(Processor.I + Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] > 0xFFF)
    Processor.REGISTER_SET[0xF] = 1;
  else
    Processor.REGISTER_SET[0xF] = 0;
  Processor.I += Processor.REGISTER_SET[(opcode & 0x0F00) >> 8];
  Processor.PC += 2;
}
//set I = Vx location of sprite
function setIToLocationOfSpriteFromVX(opcode)
{
    Processor.I = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] * 0x5;
    Processor.PC += 2;
}
//get decimal value of Vx and store hundred place in I,
//tens place in I+1, ones place in I+2
function storeBCDofVXatI(opcode)
{
  Processor.MEMORY[Processor.I]     = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] / 100;
  Processor.MEMORY[Processor.I + 1] = (Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] / 10) % 10;
  Processor.MEMORY[Processor.I + 2] = (Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] % 100) % 10;
  Processor.PC += 2;
}
//store registers of V0 thru Vx into memory
function storeV0toVXInMemory(opcode)
{
  for (var i = 0; i <= ((opcode & 0x0F00) >> 8); ++i)
    Processor.MEMORY[Processor.I + i] = Processor.REGISTER_SET[i];

  Processor.I += ((opcode & 0x0F00) >> 8) + 1;
  Processor.PC += 2;
}
//fill V0 thru Vx with values from memory
function fillV0toVXWithMemory(opcode)
{
  for (var i = 0; i <= ((opcode & 0x0F00) >> 8); ++i)
    Processor.REGISTER_SET[i] = Processor.MEMORY[Processor.I + i];

  Processor.I += ((opcode & 0x0F00) >> 8) + 1;
  Processor.PC += 2;
}

