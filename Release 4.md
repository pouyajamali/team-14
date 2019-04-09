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
[Post Mortem](#emulator-post-mortem-new)
  
# **Introduction**
* In this project, our team has created a Chip8 Emulator that is able to run two self created games (and any other Chip8 games) on any javascript enabled web-browser

* Team Members are:
  * Vikash Reddy
  * Kei Nakano
  * Jake Kim
  * Sidharth Miglani
  * Pouya Jamali

# **Project Organization**
## Communication and Meeting Times
* The team has had weekly meetings every **Monday** at **12:30pm** that are flexible with a minimum time of 1 hour. If **additional meeting** times were needed it was held on **Wednesday** and **Fridays** starting at **12:30** for unexpected circumstances or quick updates

* Communication between team members were done via **Slack** and **Whatsapp**

## Software Repository
* The team used **GitHub** to implement and merge code for each part together

## Team Software Process
* Our team had decided to follow the **Incremental Development Style**. We had chosen this since we were able to make changes to our design and software more easily with each release.
	
## Team Roles
The Team were divided into roles as follows:
*   Project Lead - **Kei Nakano** 
*   Submission Handler - **Vikash Reddy**
*   Scrum Master - **Jake Kim**
*   Developer Lead - **Sidharth Miglani**
*   Test Lead - **Pouya Jamali**    
(These roles are subject to change in future if needed)
		
		
# **Risk Analysis**
* For this group project, our main concern was if a Team Member decided to drop the course or an unexpected event happens that causes a team member to leave the group. This can cause drastic changes in our scheduling and project division. To combat this, the work will be divided among the rest of the team members.
* As we had worked on the project, we had discovered another risk which is our inexperience with JavaScript and HTML which had delayed our original schedule that we had wanted

# **Programming Language**
* This Chip8 Emulator was coded using **HTML**/**CSS**,**JavaScript**

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
*  - [x] _March 19_    Chip8 Visualizer completed with step back feature (NEW)
*  - [x] _March 20_    Second game completed
*  - [x] _March 29_    Completion of Release 4 presentation
*  - [x] _April 8_     Last minute improvements or potential extra features completed
(_\*Project deadlines are subject to change_)

## Team Gantt Chart
![](gantt%20chart.png)
	
# **Testing**     
*   If...else statements were created by a team member for automated testing.
*   We had decided against using a testing software at this time due to time constraints.
	
# **Project Breakdown**
## Emulator
*   ~~Each member will be contributing to the emulator working on different aspects~~
  * ~~Three members will work on creating and integrating the opcodes.~~
    * ~~10 hours of work-time needed per person~~
  * ~~Two members will work on reading the game files and loading it into the emulators memory~~  
    * ~~10 hours of work-time needed per person~~
* **_Emulator has been completed but is subject to further improvements later_**
	
## Visualizer   
* ~~Two members will be working on this once the emulator is completed~~
   * ~~_20_ hours of work-time needed per person~~   
* **That Visualizer has been completed**

## Games
* ~~Two members will simultaneously work on the two games as others work on the Visualizer~~
   * ~~_20_ hours of work-time needed per person~~   
* **Both Games have been completed**   
     
 (_Work time needed has been updated due to inexperience with Javascript and based off of how long the emulator actually took._)
	
## Chip8 Tool
* ~~One member will be simultaneously working on implementing a useful tool~~
* ~~We have decided to create a text editor as our tool to use to edit or programs~~
   * ~~_25_ hours of work-time needed per person~~   
* **The Chip8 Toll has been completed**   
   

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

* Visualizer (**UPDATED**)
   * Kei and Jake are the Lead Developers in this aspect
   * Kei has completed the pause and step forward features
      * Pause stops program from continuing the program run cycle
      * Step Forward only works when program is paused, runs the run cycle once and then stops until pressed again
      ~~* Step Back button implemented but does not work currently~~
      * Step Back Button has been implemented and is working (**NEW**)
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
   
 * Game 1
    * Vikash created a game to dodge incoming projectiles
       * simple game that continues until player loses
       * Game resets once player has lost
       * Improvements to be made to add difficulty
       
 * Text Editor (Extra Tool) (**UPDATED**)
    * Pouya was lead developer for this
       * Jake was support
    * Simple text-editor to open files to edit in
       * Opens files such as .html, .txt and .js
       * ~~Working on trying to open ROM Files if possible~~
       * Extra Tool can now open ROM Files (**NEW**)
          * Opening games made by OCTO will open them in Hex code
	  * Opening regular Rom files will open with function names
	  * Can only save them to text files and not back to rom.
       * can save file to specified filetype
       
 * Game 2 (**NEW**)
    * Sidharth created a memory retention game
       * Shows 4 letters ( W, A, S, D) in a random order to the player
       * PLayer must type press keys that were shown in same order
       * Game speeds up as player progresses in levels
          * Games speeds up at levels 5, 9, 13
     
# **Major Features for Next Release** (**UPDATED**)   
## ~~Chip8 Visualizer~~    
* ~~Visualizer will be completed~~    
* ~~Be able to see Chip8 games being played in any web browser~~    
    * ~~Will be adding in step back feature~~   
    * ~~Jake will be assisting Kei in completing the step back feature~~   
* ~~_Visualizer fully completed including pause, step forward etc.._~~   
## ~~Second Game~~   
* ~~Game concept still being discussed~~   
## ~~Text Editor Updates~~   
* ~~Being able to open ROM files to edit~~   
## All Features of This Emulator has Been Completed
* No New Updates Will be Added to this Project

# **Emulator Post Mortem** (**NEW**)
* During this team project, we have found how hard it can really be to work in a team and to be able to manage a schedule escpecially agmonst students. This project included various aspects of a real-life team project that we may not have been able to experience in other courses.
   * Trying to split work on a small scale project like this was difficult. Even when we did find a way to divide the work, there were people who were waiting on other parts of the project to be completed to continue. Also, if team members were not somewhat involved in different aspects, it proved to be difficult to ask for help from those team members.   
   * We found that constant communication is needed even at the cost of being a nuisance at times. This kept all team members in the loop in up to date with all things currently happening with the project. Without this sort of communication, team members would have been working on the same problems and wasting time.
   * Also trying to accomandate for everyone's schedule is also a very difficult task as we all have jobs or many other classes to accomandate for through out the semester. 
   * We would've also changed our goals for this project to accomandate for more time as we found that we all had other priorites as well that could not be avoided. This led to us setting goals we wanted instead of setting goals that were achievable. 
   * Having someone to take on "The Bad-Guy" role (as in staying on top of everyone to make sure everyone is doing their work) is key to making sure all task are being completed and everyone is staying on top of their share of the work.
