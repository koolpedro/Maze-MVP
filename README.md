2D Maze App Project

Goal of this project is to create a game in 3D using raycasting !

Requirements

General

1. All your files will be compiled on Ubuntu 14.04 LTS, using gcc (Ubuntu 4.8.4-2ubuntu1~14.04) 4.8.4
2. We will use the gcc flags -Wall -Werror -Wextra and -pedantic
3. All your functions must be commented
4. Your functions should be maximum 40 lines long (one statement per line)
5. Your functions should be maximum 80 columns long
6. No more than 5 functions per file

Betty

1. Your entire repository will be checked using Betty
2. Don’t push any object files .o or temporary files *~, or any unused source file if you don’t want to lose points !
3. It is advised to always keep a clear organisation in your repository. For example, store all your sources in a src directory, and all your headers in a inc, headers or dependencies folder.

Welcome to the 2D Maze App project! This repository contains the source code and documentation for a 2D maze application. 

Introduction

The 2D Maze App is an interactive application that allows users to navigate through various mazes. It provides an engaging experience by presenting a graphical representation of the maze and allowing users to control a character to find the exit. 

Deployed Site: https://github.com/koolpedro/Maze-MVP

Final Project Blog Article: https://www.linkedin.com/pulse/navigating-unknown-2d-maze-peter-anyakorah/

Author(s) LinkedIn: https://www.linkedin.com/in/peter-anyakorah-5484a130/

Installation

To install and run the Maze game locally, please follow these steps:

To install and run the maze game from your GitHub repository as a different user, follow these steps:

1. Clone the Repository:
   - Open a terminal or command prompt.
   - Navigate to the directory where you want to clone the repository.
   - Run the following command to clone the repository:

     ```
     git clone https://github.com/koolpedro/Maze-MVP.git
     ```

2. Navigate to the Project Directory:
   - Change into the directory of the cloned repository:

     ```
     cd Maze-MVP
     ```
     ...
     cd game
     ...
     
3. Open the Game in a Web Browser:
   - Once you are inside the project directory, you should see the files `index.html`, `styles.css`, and `maze.js`.
   - Double-click on the `index.html` file to open it in your default web browser.

The maze game should now be running in the web browser. You can use the arrow keys to move the player within the maze and explore the 3D rendering based on raycasting.




Usage

Once the 2D Maze App is running, you can use the following controls to navigate through the maze:

- Use the arrow keys (← ↑ → ↓) to move the character in the corresponding direction.
- Find the exit of the maze by reaching the goal.

Enjoy exploring different mazes and challenging your navigation skills!

Compilation

$ gcc -Wall -Werror -Wextra -pedantic ./src/*.c -lm -o maze `sdl2-config --cflags` `sdl2-config --libs`;

Contributing

We welcome contributions to the 2D Maze App project. To contribute, please follow these steps:

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Submit a pull request, explaining your changes and why they should be merged.

We appreciate your help in making the 2D Maze App even better!

Related Projects

Here are some related projects that you may find interesting:

- 3D Maze Generator: A tool for generating 3D mazes.
- Maze Solver Algorithm: An algorithm for solving mazes programmatically.

Feel free to explore these projects as well!

![flowchart of maze](https://github.com/koolpedro/Maze-MVP/assets/110994894/b7a28b6c-e114-4d46-9bea-d9064012585a)
