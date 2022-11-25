# Portal-For-Courses

## Description
   The landing page of our portal have two buttons login and register. You can register as a student as well as admin which may be any teacher or any   teaching assistant. We have distinguished between admin and student by a code "1879" for admin and "0" for student. 
   #### Login As Admin

   When you login as admin you will be able to see a page containing all the courses that the admin have created. There are different card for           different courses and when you click on "View COurse" on the course card, then you will land on on the course page where you will see the   
   assignments that the admin have created. The feature of add courses and add assignments are on the navbar of the admin page and course page
   repectively.
   If the admin wants to create a new course he have to click on Create New Course button present on navbar of the admin page, on clicking he have to
   fill a forms, asking the details of course like course name, course code and course password.
  
  When the admin wants to create an assignments for the students then the admin have to click on the Add Assignment on the navbar of course page
  then the admin will be able to see a form, in which the admin have to fill the Title, description, start date, due date and a zip file of the
  problem statement.
   
   
   In the course page where the admin is able to see the assignments created by the admin when the admin will click on that he will be able to view all the subissions by the students for grading and feedback the admin have to click on view submission and here he will be able to download the submission of tht student.
   
   #### Login As Student
   When a student logins he will land on Student HomePage whcih contains all the courses for which the student is registered. The page navbar contains a Register button, when the student click on that he will see a form asking for COurse Code and Password whcih the admin is supposed to provide the student to register for course.
   
   When the student will click on View Course on the course card the student will land on a page where all the assignments given by the admin will appear. When he will click on Download Assignment he will land on the page having a card showing the assignment title, assignment descriptoon, start date and due date. The student will also be able to download resources by clickling on the button of same. The student will have to submit the assignment in zip file.The student will be able to see his grades and feedback from the admin in the same card when uploaded. 
   
   
   #### Extra Features
   forgot password feature added in the login page. We have asked question asking mother's age.
   
## How to Run 
  Cloning the repository
  
  `git clone https://github.com/ATAck-Portal-for-Courses/Portal-For-Courses.git`
  
  Getting into the repo
  
  `cd Portal-For-Courses/atack-portal/`
  
  Installing dependencies
  
  For windows downloading NodeJS(>16.0) [from here](https://nodejs.org/en/download/) will add `npm` 
  
  For Debian Linux (Ubuntu) 
  
  `cd ~| curl -sL https://deb.nodesource.com/setup_16.6.1 -o /tmp/nodesource_setup.sh`
  
  Installing `nodemon` for backend
  
  `cd backend/`
  
  `npm i nodemon`
  
  Initialising the backend
  
  `npm start`
  
  Initialising the frontend(in a separate terminal)
  Go to the directory containing `frontend`
  
  `cd frontend/`
 
  `npm install`
  
  `npm start`
  
  The application will now start running in `http://localhost:3000/`
  
