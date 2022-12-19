# Welcome to Food-Finder

A Simple Express App that has provides 3 endpoints where 2 of it are delegated based on user roles. It provides JWT Token for Authorization and grants resource sharing based on role configured for a user.

## Software Required to install locally

1. Node v16.13.0
2. Visual Studio Code
3. ThunderBird Client Visual Studio Code Extension (or) POSTMAN (or) Insomnia Rest Client
4. Git

## How to run this project locally:

In order to execute the current project, you have to follow the mentioned steps -

1. > git clone https://github.com/AdhithyanM/role-authorization.assignment.git
2. Open the cloned project in VSCode.
3. Setup the server by executing the command 'npm install' from terminal.
4. Open your REST Client Tool and access the below endpoints using GET method.

     - http://localhost:4000/test-users
        
        This will return 3 test users and with their roles and their JWT tokens.
        
     - http://localhost:4000/admin
     - http://localhost:4000/staff
     
        The above 2 urls expect a header in below format
              headerName        headerValue
              Authorization     Bearer jwtToken
    
     - /admin resource can only be accessed by user with role admin or superadmin.
     - /staff resource can be accessible by user with role staff, admin, superadmin.
