# **Table Of Contents** 
[Introduction](#introduction)   
[Project Organization](#project-organization)   
[Risk Analysis](#risk-analysis)    
[Programming Language](#programming-language)    
[Hardware and Software Requirements](#hardware-and-software-requirements)    
[Major Project Deadlines](#major-project-deadlines)    
[Testing](#testing)    
[Project Breakdown](#project-breakdown)    
[What Has Been Completed](#what-has-been-completed-updated)   
[Major Features for Next Release](#major-features-for-next-release-updated)
  
# **Introduction**
* In this project, our team will create a Chip8 Emulator that is able to run two self created games (and any other Chip8 games) on any javascript enabled web-browser

* Team Members are:
  * Vikash Reddy
  * Kei Nakano
  * Jake Kim
  * Sidharth Miglani
  * Pouya Jamali

# **Project Organization**
## Communication and Meeting Times
* The team will have weekly meetings every **Monday** at **12:30pm** that are flexible with a minimum time of 1 hour. If **additional meeting** times are needed it will be held on **Wednesday** and **Fridays** starting at **12:30** for unexpected circumstances or quick updates

* Communication between team members is done via **Slack** and **Whatsapp**

## Software Repository
* The team will be using **GitHub** to implement code and merge each part together

## Team Software Process
* Our team has decided to follow the **Incremental Development Style**. We have chosen this since we can make changes to our design and software more easily with each release.
	
## Team Roles
The Team is divided into roles as follows:
*   Project Lead - **Kei Nakano** 
*   Submission Handler - **Vikash Reddy**
*   Scrum Master - **Jake Kim**
*   Developer Lead - **Sidharth Miglani**
*   Test Lead - **Pouya Jamali**    
(These roles are subject to change in future if needed)
		
		
# **Risk Analysis**
* For this group project, our main concern is if a Team Member decides to drop the course or an unexpected event happens that causes a team member to leave the group. This can cause drastic changes in our scheduling and project division. To combat this, the work will be divided among the rest of the team members.
* (NEW) As we had worked on the project, we had discovered another risk which is our inexperience with JavaScript and HTML which had delayed our original schedule that we had wanted

# **Programming Language**
* This Chip8 Emulator will be coded using **HTML**/**CSS**,**JavaScript**

# **Hardware and Software Requirements**
## Hardware Needed
*   Any computer able to run a modern web browser 
	
## Software Needed
*   Any web-browser that has JavaScript enabled (ie Google Chrome, Firefox etc...)

# **Major Project Deadlines**   
(**_Dates have been updated accordingly to current project schedule_**)
*  - [x] _January 18_  Release 0 Presentation Completed
*  - [x] _January 25_  Chip8 Emulator completed and ready for automated testing
*  - [x] _February 4_  Actual finish date of of Emulator due to inexperience with JavaScript
*  - [x] _February 12_  Automated testing ready to be implemented
*  - [x] _February 15_  Chip8 Visualizer completed without pause, step forward etc.. capabilities
*  - [x]  _February 25_ Chip8 Visualizer partially completed with pause and step forward features (UPDATED)
*  - [x] _February 28_ Start of creation of two games and Extra helpful tools to implement
*  - [x] _March 13_    One game and extra tool completed
*  - [ ] _March 19_    Chip8 Visualizer completed with step back feature (NEW)
*  - [ ] _March 20_    Second game completed
*  - [ ] _March 29_    Completion of Release 4 presentation
*  - [ ] _April 8_     Last minute improvements or potential extra features completed
(_\*Project deadlines are subject to change_)

## Team Gantt Chart
![](gantt%20chart.png)
	
# **Testing**     
*   If...else statements will be created by a team member for automated testing.
*   We have decided against using a testing software at this time due to time constraints.
	
# **Project Breakdown**
## Emulator
*   ~~Each member will be contributing to the emulator working on different aspects~~
  * ~~Three members will work on creating and integrating the opcodes.~~
    * ~~10 hours of work-time needed per person~~
  * ~~Two members will work on reading the game files and loading it into the emulators memory~~  
    * ~~10 hours of work-time needed per person~~
* **_Emulator has been completed but is subject to further improvements later_**
	
## Visualizer   
* Two members will be working on this once the emulator is completed
   * _20_ hours of work-time needed per person

## Games
* Two members will simultaneously work on the two games as others work on the Visualizer
   * _20_ hours of work-time needed per person   
     
 (_Work time needed has been updated due to inexperience with Javascript and based off of how long the emulator actually took._)
	
## Chip8 Tool
* One member will be simultaneously working on implementing a useful tool
* We have decided to create a text editor as our tool to use to edit or programs (**NEW**)
   * _25_ hours of work-time needed per person
   

# What Has Been Completed (**UPDATED**)
* Emulator
   * Sidharth was the Lead Developer for this part
   * Kei worked on opcodes 1-11
   * Jake worked on opcodes 12-22
   * Pouya worked on opcodes 23-35
      * Opcodes implemented using switch cases
      * Opcodes converted from hexadecimal to binary for use with our emulator
   * Sidharth and Vikash worked on Chip8.js to process opcodes
   * Test Lead Pouya had reviewed code as each section was added to the main files
      * Testing done with PONG game found online but this game had an issue mentioned in instructions. This game was also tested with other online emulators and confirmed that the issue was with the game itself as the same error was produced

* Visualizer
   * Kei and Jake are the Lead Developers in this aspect
   * Kei has completed the pause and step forward features
      * Pause stops program from continuing the program run cycle
      * Step Forward only works when program is paused, runs the run cycle once and then stops until pressed again
      * Step Back button implemented but does not work currently (**NEW**)
   * Jake has completed the output of the registers and opcodes
      * Shows current opcode being executed
      * Shows current function being executed
      * Shows Memory at location I of the processor memory
      * Shoes Stack at location the stack pointer is pointing to

* Webpage design
   * Sidharth was the sole developer in this section
   * Using CSS, Sidharth had created a better looking page for our game
      * Used premade colours for background
   * This section will be updated to accommodate for future needs
      * Will be adding more text boxes for a cleaner design
   
* Automated Testing For Emulator
   * Vikash is the Lead Developer for this part
   * Using if...else statements to create test
      * Looks to see if correct function is being called when certain opcode is passed
      * Also checks to see if program counter is also incremented correctly
   * Pouya was support for this section
   
 * Game 1 (**NEW**)
    * Vikash created a game to dodge incoming projectiles
       * simple game that continues until player loses
       * Game resets once player has lost
       * Improvements to be made to add difficulty
       
 * Text Editor (Extra Tool) (**NEW**)
    * Pouya was lead developer for this
       * Jake was support
    * Simple text-editor to open files to edit in
       * Opens files such as .html, .txt and .js
       * Working on trying to open ROM Files if possible
       * can save file to specified filetype
     
# **Major Features for Next Release** (**UPDATED**)
~~## Extra Tool~~
~~* Extra tool completed to help create games~~
~~* Creating an assembler to help make games~~
~~## First Game~~
~~* First game completed~~
~~* First game idea is pong but is subject to change~~
~~* May still have some bugs but playable~~
## Chip8 Visualizer (**UPDATED**)
* Visualizer will be completed
* Be able to see Chip8 games being played in any web browser
    * Will be adding in step back feature
    * Jake will be assisting Kei in completing the step back feature
* _Visualizer fully completed including pause, step forward etc.._
## Second Game (**NEW**)
* Game concept still being discussed
## Text Editor Updates (**NEW**)
* Being able to open ROM files to edit

