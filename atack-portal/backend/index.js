const express = require('express');
const cors = require("cors");
require('./db/config');
const Student = require('./db/Student');
const Teacher = require('./db/Teacher');
const Course = require('./db/Course');


const app = express();
app.use(express.json());
app.use(cors());


app.post('/registerStudent', async (req, resp) => {
    let obj = req;
    // const password = obj.body.password;
    // delete obj.body.password;
    // const email = obj.body.email
    const username = obj.body.username;
    // delete obj.body.email;


    let auth = await Student.findOne({username:username});

    if (auth) {
        // ("Student already registered");
        resp.send(false);
    }
    else {
        console.warn(req.body)

        let student = new Student(req.body);
        let result = await student.save();
        result = result.toObject();
        resp.send(result);
    }
});

app.post('/registerTeacher', async (req,resp)=>{
    const username = req.body.username;

    const auth = await Teacher.findOne({username:username});

    if (auth) {
        // ("Student already registered");
        resp.send(false);
    }
    else {
        console.warn(req.body)

        let teacher = new Teacher(req.body);
        let result = await teacher.save();
        result = result.toObject();
        resp.send(result);
    }
})

app.post('/loginStudent', async (req,resp)=>{

    let student = await Student.findOne(req.body).select("-password");

    resp.send(student? student:false);
    
})

app.post('/loginTeacher', async (req,resp)=>{
    let teacher = await Teacher.findOne(req.body).select("-password");
    resp.send(teacher? teacher:false);
})

app.post('/add-courses', async (req,resp)=>{
    let course = new Course(req.body);
    let result = await course.save(); 
    resp.send(result)
});

app.listen(7000);