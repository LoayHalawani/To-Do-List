# Description

A simple to-do list web application that allows users to add, edit, and delete tasks. Additionally, users are able to mark tasks as completed and filter tasks based on their completion status.

# Technologies

This web application is developed using the PERN stack (PostgreSQL, Express.js, React.js, Node.js).

# How-to-run

1. Clone the repository

   - git clone https://github.com/LoayHalawani/To-Do-List.git
   - cd to-do-list

2. Create the database

   - Download and install PostgreSQL
   - Replace the value of the password field in to-do-list/server/db.js with the password created during the PostgreSQL installation process
   - psql -U postgres
   - Should there be any issues with the previous command, make sure that the "lib" and "bin" folders inside the PostgreSQL installation directory are included in the PATH environment variable
   - Enter the password created during the PostgreSQL installation process
   - Execute the first query of to-do-list/server/database.sql
   - \c todo_db
   - Execute the second query of to-do-list/server/database.sql

3. Set up the server-side

   - cd server
   - npm install
   - node index.js

4. Setup the client-side
   - cd client
   - npm install
   - npm start
5. Access the app
   - Open any browser
   - Navigate to http://localhost:5000
