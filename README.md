# Code Performance Analyzer



(a) Running the Project:

To run this project, please follow these steps:

1. Ensure you have Node.js and npm (Node Package Manager) installed on your system.
2. Clone the repository to your local machine.
3. Navigate to the project directory(src) in your terminal or command prompt.
4. Run the command `npm install` to install all the required dependencies.
5. Type out "cd performance-analyzer"
6. Once the installation is complete, run the command `npm start` to start the development server.
7. Your default web browser should automatically open and display the running application.

(b) Design Choices:

The design choices for this application appear to be focused on a clean and minimalist approach. The user interface is simple, with a prominent warning message displayed in the center of the screen. The layout is well-structured, with the warning message, Git log, command output, and control buttons neatly organized.

The choice to use a modal-like window to display the warning message is a common and effective way to draw the user's attention to an important issue. The use of the red "X" icon in the top-right corner aligns with typical UI conventions for closing a modal or dialog.

The positioning of the buttons ("Open Git Log", "Show Command Output", and "Cancel") at the bottom of the window allows the user to easily access the relevant actions after reading the warning message.

(c) Assumptions and Limitations:

Based on the information provided in the warning message, we can make the following assumptions:

1. This project is using a dependency or build process that involves the "node_modules/.bin/autoprefixer" file.
2. Git is responsible for modifying this file, and the next time Git touches it, the file will be replaced by CRLD.
3. This warning is likely related to a known issue or behavior in the project's setup or dependencies.

As for limitations, the current implementation does not provide any additional context or guidance on how to resolve the issue. The user is left with the basic warning message and the option to view the Git log or command output, which may or may not contain the necessary information to address the problem.

Please refer to the screenshots provided
