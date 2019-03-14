# **Instructions For Chip8 Use**

* Ensure Chip8.js, PONG2, Game1.ch8, chip8.html and opcode.js files are all in the same folder
*	Open the chip8.html file in any JavaScript enabled internet browser
*	Near the bottom, click on the Choose File button
*	Choose either PONG2 or Game1.ch8 file included\*\*
* If PONG2 has been choosen:  
   *	Once PONG2 has been uploaded, the game will be displayed
   *	To play, use keys 1 (UP) and Q (DOWN) to move the left paddle. Use the key R (DOWN) to move the right paddle
* If Game1.ch8 has been choosen:
   *   The game will start once it has been loaded
   *   Use the A key to move to the left and the D key to move to the right
   *   Dodge incoming projectiles
   *   The game is reset if you are hit
* Press the "Pause" button to pause the game
   * Press the "Continue" button to continue the game
* Use the "Next" button to move to the next operation
   *   Can only be used while Paused
* The "Prev" button does not currently work
    
    
\*\*This Pong game was one found online and is not of our own creation. We have found that this game does not fully work as the right paddle only moves in the down direction. This game has also been tested on other working emulators found online and the same problem occurs on all of them. Currently, this game was mainly to test that our emulator is working. 

# **Instructions For Automatic Testing of Chip8 Emulator**

*  Ensure Chip8.js, PONG2, Testing.html, Auto_testing.js and opcode.js files are all in the same folder
*   Open the Testing.html file in any JavaScript enabled internet browser
*   Once opened, the test will run 
*   The file test for each opcode scenerio to see if the correct opcode is being used and if the program counter is being incremented correctly
