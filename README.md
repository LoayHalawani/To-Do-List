# Description

A simple to-do list web application that allows users to add, edit, and delete tasks. Additionally, users are able to mark tasks as completed and filter tasks based on their completion status.

# Technologies

This web application is developed using the PERN (PostgreSQL, Express.js, React.js, Node.js) stack.

# How-to-run

1. Clone the repository
   - git clone https://github.com/LoayHalawani/To-Do-List.git
   - cd to-do-list
2. Create the database
   - Make sure to have PostgreSQL installed
   - psql -U postgres
   - If you face any issues with the previous command, make sure that the "lib" and "bin" folders inside your PostgreSQL installation directory are included in the PATH environment variable
   - Enter the password you created when installing PostgreSQL
   - If your password is not "password", make sure to replace the value of the password field in to-do-list/server/db.js with your password
   - Execute the first line of to-do-list/server/database.sql
   - \c todo_db
   - Execute the second line of to-do-list/server/database.sql
3. Set up the backend
   - cd server
   - npm install
   - node index.js
4. Setup the frontend
   - cd client
   - npm install
   - npm start
5. Access the app
   - Open your favorite browser
   - Navigate to http://localhost:5000
