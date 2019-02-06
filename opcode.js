function C8_clearScreen(opcode)
{
  Processor.ClearVRAM();
  Processor.DRAW_FLAG = true;
  Processor.PC += 2;
}

function C8_return(opcode)
{
  --Processor.SP;
  Processor.PC = Processor.STACK[Processor.SP];
  Processor.PC += 2;
}

function C8_jumpToAdress(opcode)
{
   Processor.PC = opcode & 0x0FFF;
}

function C8_callFunction(opcode)
{
  Processor.STACK[Processor.SP] = Processor.PC;
  ++Processor.SP;
  Processor.PC = opcode & 0x0FFF;
}

function C8_skipNextInstructionVXeqNN(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] == (opcode & 0x00FF))
    Processor.PC += 4;
  else
    Processor.PC += 2;
}
function C8_skipNextInstructionVXneqNN(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] != (opcode & 0x00FF))
      Processor.PC += 4;
    else
      Processor.PC += 2;
}
function C8_skipNextInstructionVXeqVY(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] == Processor.REGISTER_SET[(opcode & 0x00F0) >> 4])
      Processor.PC += 4;
    else
      Processor.PC += 2;
}
function C8_SetRegisterVXtoNN(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] = opcode & 0x00FF;
  Processor.PC += 2;
}

function C8_AddNNtoVX(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] += opcode & 0x00FF;
  Processor.PC += 2;
}

function C8_SetVXtoVY(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] = Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}

function C8_SetVXtoVXorVY(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] |= Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}

function C8_SetVXtoVXandVY(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] &= Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}

function C8_SetVXtoVXxorVY(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] ^= Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}
// VF trickstery
function C8_AddVYtoVX(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x00F0) >> 4] > (0xFF - Processor.REGISTER_SET[(opcode & 0x0F00) >> 8]))
    Processor.REGISTER_SET[0xF] = 1; //carry
  else
    Processor.REGISTER_SET[0xF] = 0;
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] += Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}

// VF trickstery
function C8_SubstractVYfromVX(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x00F0) >> 4] > Processor.REGISTER_SET[(opcode & 0x0F00) >> 8])
    Processor.REGISTER_SET[0xF] = 0; // there is a borrow
  else
    Processor.REGISTER_SET[0xF] = 1;
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] -= Processor.REGISTER_SET[(opcode & 0x00F0) >> 4];
  Processor.PC += 2;
}

// VF trickstery
function C8_ShiftVXRight(opcode)
{
  Processor.REGISTER_SET[0xF] = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] & 0x1;
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] >>= 1;
  Processor.PC += 2;
}
// VF trickstery
function C8_SetVXtoVYminusVX(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] > Processor.REGISTER_SET[(opcode & 0x00F0) >> 4])	// VY-VX
    Processor.REGISTER_SET[0xF] = 0; // there is a borrow
  else
    Processor.REGISTER_SET[0xF] = 1;
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] = Processor.REGISTER_SET[(opcode & 0x00F0) >> 4] - Processor.REGISTER_SET[(opcode & 0x0F00) >> 8];
  Processor.PC += 2;
}

function C8_ShiftVXLeft(opcode)
{
  Processor.REGISTER_SET[0xF] = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] >> 7;
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] <<= 1;
  Processor.PC += 2;
}

function C8_skipNextInstructionVXneqVY(opcode)
{
  if(Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] != Processor.REGISTER_SET[(opcode & 0x00F0) >> 4])
    Processor.PC += 4;
  else
    Processor.PC += 2;
}

function C8_SetItoAdress(opcode)
{
  Processor.I = opcode & 0x0FFF;
  Processor.PC += 2;
}

function C8_JumpToAdressPlusV0(opcode)
{
    Processor.PC = (opcode & 0x0FFF) + Processor.REGISTER_SET[0];
}

function C8_SetVxToRandomAndNN(opcode)
{
  var regidx = (opcode & 0xF00) >>> 8;
  var add = opcode & 0x0FF;

  Processor.REGISTER_SET[regidx] = (Math.random()*256) & add;

  Processor.PC += 2;
}

// VF trickstery
function C8_DrawSprite(opcode)
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

function C8_SetVXtoDelayRegister(opcode)
{
  Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] = Processor.DELAY_REGISTER;
  Processor.PC += 2;
}

function C8_WaitKeyPressAndStoreInVX(opcode)
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

function C8_SetDelayRegisterToVX(opcode)
{
  Processor.DELAY_REGISTER = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8];
  Processor.PC += 2;
}

function C8_SetSoundRegisterToVX(opcode)
{
  Processor.SOUND_REGISTER = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8];
  Processor.PC += 2;
}

function C8_AddVXtoI(opcode)
{
  if(Processor.I + Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] > 0xFFF)
    Processor.REGISTER_SET[0xF] = 1;
  else
    Processor.REGISTER_SET[0xF] = 0;
  Processor.I += Processor.REGISTER_SET[(opcode & 0x0F00) >> 8];
  Processor.PC += 2;
}

function C8_SetIToLocationOfSpriteFromVX(opcode)
{
    Processor.I = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] * 0x5;
    Processor.PC += 2;
}

function C8_StoreBCDofVXatI(opcode)
{
  Processor.MEMORY[Processor.I]     = Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] / 100;
  Processor.MEMORY[Processor.I + 1] = (Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] / 10) % 10;
  Processor.MEMORY[Processor.I + 2] = (Processor.REGISTER_SET[(opcode & 0x0F00) >> 8] % 100) % 10;
  Processor.PC += 2;
}

function C8_StoreV0toVXInMemoryStartingAtI(opcode)
{
  for (var i = 0; i <= ((opcode & 0x0F00) >> 8); ++i)
    Processor.MEMORY[Processor.I + i] = Processor.REGISTER_SET[i];

  Processor.I += ((opcode & 0x0F00) >> 8) + 1;
  Processor.PC += 2;
}

function C8_FillV0toVXWithValuesFromMemoryAtI(opcode)
{
  for (var i = 0; i <= ((opcode & 0x0F00) >> 8); ++i)
    Processor.REGISTER_SET[i] = Processor.MEMORY[Processor.I + i];

  Processor.I += ((opcode & 0x0F00) >> 8) + 1;
  Processor.PC += 2;
}

function C8_SkipNextInstructionIfTheKeyStoredInVXisPressed(opcode)
{
  if(Processor.KEYBOARD_BUFFER[Processor.REGISTER_SET[(opcode & 0x0F00) >> 8]] != 0)
    Processor.PC += 4;
  else
    Processor.PC += 2;
}

function C8_SkipNextInstructionIfTheKeyStoredInVXisNOTPressed(opcode)
{
  if(Processor.KEYBOARD_BUFFER[Processor.REGISTER_SET[(opcode & 0x0F00) >> 8]] == 0)
    Processor.PC += 4;
  else
    Processor.PC += 2;
}