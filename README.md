# Introduction

The purpose of this document is to explain the project, I have used Node.js as a backend technology for this app.
The main purpose of this app is connecting college students with their teachers. A communcation platform between them.
This is a chattig app where students and teachers can communicate. Teachers can post assignments and their students can
submit solutions to them.

# Background

The reason behind using Node.js & MongoDB in this project is to build a scalable code. Also, a solution that fits the project
onwer's budget. Node.js can perform tasks fast and does not need much hardware.
It's almost single-threaded and it can execute requests without need to wait some time for other requests to be complete.

MongoDB is a good database solution that provides more scalability because it is a document-based and schemaless database.
Also, it provides some cool built-in features like text indexes which helps a lot in search algorithms.

# Project Description

This project has the ability to connect students with their teachers in chatting rooms. The chatting rooms are not for
just sending media or text messages. Teacher (which is the owner of the room) can post assignments in the room and room members (which are the students) can submit files to them.

- Core ibraries and frameworks used:
  - Express
  - MongoDB
  - Socket.io

In this app we have users, rooms, messages, assignments and submissions. These are the data models in the app.
These data models have relations between them.

- Relations between MongoDB database models:

* Users and Rooms:
  One to Many: A user can have multiple rooms, and a room belongs to one user.

* Rooms and Assignments:
  One to Many: A room can have multiple assignments, and an assignment belongs to one room.

* Rooms and Messages:
  One to Many: A room can have multiple messages, and a message belongs to one room.

* Users and Messages:
  One to Many: A user can have multiple messages, and a message belongs to one user.

* Assignments and Submissions:
  One to Many: An assignment can have multiple submissions, and a submission belongs to one assignment.

# Implementation

- App routes:
  - Auth
  - Users
  - Rooms
  - Messages
  - Assignments

* Lifecycle of a request:

- Auth middleware function:
  It takes the authentication token (which is a bearer token), it decodes the token and takes the
  result info, and finally it looks for a user with the id encoded in the token.
  If the user exists, then it passes the execution to the next middleware function,
  Otherwise, it sends back an error response with 403 HTTP Status Code (Unauthorized).
- Route controller function:
  It takes the data of the request, and passes it to its service to process it.
  It receives the data from the service function and sends it back to the client.
  It might also use more than a single service, like the register controller function
  whivh uses two services. First one, the service of writing the user data to the database,
  and the second one is the email service which is used for sending an email that contains
  user's email verification code.
- Service function:
  A service function is responsible to validate data and throw an error in case of there's
  something wrong.
  In case of everything is ok, it proccess the operation and sends back the result data to
  the controller function, and the controller function sends back the response to the client.

* How the middleware of an API is implemented?
  Each route has controllers, and each controller has service/services that serve its need.
  The route comes first, and each route has a single controller.
  The controller comes second, and each controller contacts one or more services to achieve that task.

* Explain the middleware functions that run the Register API?
  - Call the route controller.
  - Controller calls the auth service that includes the regiseration code.
  - Controller calls the email service that sends a mail to the given email.
  - Controller sends back user's data.
