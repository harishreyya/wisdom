# wisdom assignment

## Introduction
A backend application for managing or registering jobs and applicants.

## Features
The key features of the application.

- Add a new job position (Job Title, Department, Description, Open Date).
- Retrieve a list of all job positions.
- Add a new applicant for a specific job (Job ID, Applicant Name, Email, Resume Link, Status).
- Retrieve a list of all applicants for a specific job.
- Update the status of an applicant (e.g. Pending, Interviewed, Rejected, Hired).
- Delete an applicant from the database.
- Fetch interview details for a specific applicant.
 -Schedule an interview (Applicant ID, Interview Date, Interviewer Name).

## Deployed link
[link](https://wisdom-0grj.onrender.com/api/job)

## Demo Video link
[link](https://drive.google.com/file/d/1CX3ERbLj-oW7gSYFqOO7aJFJ4-g7dKwk/view?usp=drive_link)

## Installation or How to run the app
I created cloud database using MongoDb Atlas. So, if you want to run our code then please read the instructions below :
- Clone our repository `https://github.com/harishreyya/wisdom.git`
- Open the code in your VS code
- Now run `npm install` or `npm i` which will install all the required packages of node
- After installation, now run `npm run server` and  you will see `server is listening on 5022` 
- Now you see server running, you can start checking the apis on postman.



## API Endpoints
Backend Applications provide a list of API endpoints
- post '/jobs'
- get '/jobs'
- post '/applicants'
- get '/applicants?jobId={jobId}'
- patch '/applicants/:applicantId'
- delete '/applicants/:applicantId'
- get '/interviews?applicantId={applicantId}'
- post '/interviews'


## Technology Stack
List and provide a brief overview of the technologies used in the project.
- MongoDB
- Express JS
- Node JS
 
 ### Dependencies and packages

#### Backend
- `mongoose`<br/>
  connecting MongoDB to the Node js server
- `nodemon`<br/>
  It monitors your project and automatically restarts when it detects any changes.
- `dotenv`<br/>
  to secure the environment variables


#### Cloud Deployment

- `Render`
used Render for deploying the MongoDB (database), node js (Backend) 
