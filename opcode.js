function display_clear(opcode)
{
  Processor.ClearVRAM();
  Processor.DRAW_FLAG = true;
  Processor.PC += 2;
}

function return_routine(opcode)
{
  --Processor.SP;
  Processor.PC = Processor.STACK[Processor.SP];
  Processor.PC += 2;
}

function jumpToNNN(opcode)
{
   Processor.PC = opcode & 0x0FFF;
}

function callFunction(opcode)
{
  Processor.STACK[Processor.SP] = Processor.PC;
  ++Processor.SP;
  Processor.PC = opcode & 0x0FFF;
}

function skipNIVXeqNN(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] == (opcode & 0x00FF))
    Processor.PC += 4;
  else
    Processor.PC += 2;
}
function s  kipNIVXneqNN(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] != (opcode & 0x00FF))
      Processor.PC += 4;
    else
      Processor.PC += 2;
}
function skipNIVXeqVY(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] == Processor.REGISTER_SET[(opcode & 0x00F0) >> 4])
      Processor.PC += 4;
    else
      Processor.PC += 2;
}
function setRegVXtoNN(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] = opcode & 0x00FF;
  Processor.PC += 2;
}

function addNNtoVX(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] += opcode & 0x00FF;
  Processor.PC += 2;
}

function setVXtoVY(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] = Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}

function setVXtoVXorVY(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] |= Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}

function setVXtoVXandVY(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] &= Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}

function setVXtoVXxorVY(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] ^= Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}
// VF trickstery
function addVYtoVX(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x00F0) >> 4] > (0xFF - Processor.REGISTER_SET[(opcode & 0x0F00) >> 8]))
    Processor.REGISTER_SET[0xF] = 1; //carry
  else
    Processor.REGISTER_SET[0xF] = 0;
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] += Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}

// VF trickstery
function substractVYfromVX(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x00F0) >> 4] > Processor.REGISTER_SET[(opcode & 0x0F00) >> 8])
    Processor.REGISTER_SET[0xF] = 0; // there is a borrow
  else
    Processor.REGISTER_SET[0xF] = 1;
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] -= Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}

// VF trickstery
function shiftVXRight(opcode)
{
  Processor.REGISTER_SET[0xF] = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] & 0x1;
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] >>= 1;
  Processor.PC += 2;
}
// VF trickstery
function setVXtoVYminusVX(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] > Processor.REGISTER_SET[(opcode & 0x00F0) >> 4])	// VY-VX
    Processor.REGISTER_SET[0xF] = 0; // there is a borrow
  else
    Processor.REGISTER_SET[0xF] = 1;
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] = Processor.REGISTER_SET[(opcode & 0x00F0) >> 4] - Processor.REGISTER_SET[(opcode & 0x0F00) >> 8];
  Processor.PC += 2;
}

function shiftVXLeft(opcode)
{
  Processor.REGISTER_SET[0xF] = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] >> 7;
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] <<= 1;
  Processor.PC += 2;
}

function skipNIVXneqVY(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] != Processor.REGISTER_SET[(opcode & 0x00F0) >> 4])
    Processor.PC += 4;
  else
    Processor.PC += 2;
}

function setItoAdress(opcode)
{
  Processor.I = opcode & 0x0FFF;
  Processor.PC += 2;
}

function jumpToAdressPlusV0(opcode)
{
    Processor.PC = (opcode & 0x0FFF) + Processor.REGISTER_SET[0];
}

function setVxToRandomAndNN(opcode)
{
  var regidx = (opcode & 0xF00) >>> 8;
  var add = opcode & 0x0FF;

  Processor.REGISTER_SET[regidx] = (Math.random()*256) & add;

  Processor.PC += 2;
}

// VF trickstery
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

function setVXtoDR(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] = Processor.DELAY_REGISTER;
  Processor.PC += 2;
}

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

function setDRToVX(opcode)
{
  Processor.DELAY_REGISTER = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8];
  Processor.PC += 2;
}

function setSRToVX(opcode)
{
  Processor.SOUND_REGISTER = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8];
  Processor.PC += 2;
}

function addVXtoI(opcode)
{
  if(Processor.I + Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] > 0xFFF)
    Processor.REGISTER_SET[0xF] = 1;
  else
    Processor.REGISTER_SET[0xF] = 0;
  Processor.I += Processor.REGISTER_SET[(opcode & 0x0F00) >> 8];
  Processor.PC += 2;
}

function setIToLocationOfSpriteFromVX(opcode)
{
    Processor.I = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] * 0x5;
    Processor.PC += 2;
}

function storeBCDofVXatI(opcode)
{
  Processor.MEMORY[Processor.I]     = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] / 100;
  Processor.MEMORY[Processor.I + 1] = (Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] / 10) % 10;
  Processor.MEMORY[Processor.I + 2] = (Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] % 100) % 10;
  Processor.PC += 2;
}

function storeV0toVXInMemory(opcode)
{
  for (var i = 0; i <= ((opcode & 0x0F00) >> 8); ++i)
    Processor.MEMORY[Processor.I + i] = Processor.REGISTER_SET[i];

  Processor.I += ((opcode & 0x0F00) >> 8) + 1;
  Processor.PC += 2;
}

function fillV0toVXWithMemory(opcode)
{
  for (var i = 0; i <= ((opcode & 0x0F00) >> 8); ++i)
    Processor.REGISTER_SET[i] = Processor.MEMORY[Processor.I + i];

  Processor.I += ((opcode & 0x0F00) >> 8) + 1;
  Processor.PC += 2;
}

function skipNIIfKeyInVXPressed(opcode)
{
  if(Processor.KEYBOARD_BUFFER[Processor.REGISTER_SET[(opcode & 0x0F00) >> 8]] != 0)
    Processor.PC += 4;
  else
    Processor.PC += 2;
}

function skipNIIfKeyInVXNOTPressed(opcode)
{
  if(Processor.KEYBOARD_BUFFER[Processor.REGISTER_SET[(opcode & 0x0F00) >> 8]] == 0)
    Processor.PC += 4;
  else
    Processor.PC += 2;
}
