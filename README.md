Changed architecture for node.js with WebSockets. Using MongoDB as a data storage is an issue (I currently use JSON storage at localhost:8000/tasks)
For running it download and install Node.js (it's simple) from official Node.js website https://nodejs.org/ .
Then clone current repository. Afterwards in your console go to the folder with the repository and run the command
<code>npm install</code> 
in your terminal.
Wait till the project dependencies will be installed to your computer.
In console run the <code>node server.js</code> command.

If everything is OK - go to your browser and type 'localhost:8000/todo'.
Open another tab and try out the app with different username.
Check the data storage at the localhost:8000/tasks
