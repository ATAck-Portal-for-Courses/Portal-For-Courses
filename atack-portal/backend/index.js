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


app.post('/addCourse', async (req,resp)=>{
    const auth = await Course.findOne(req.body);
    
    if(auth){
        // alert("Course has already been added by you.");
        resp.send(false);
    }
    else{
        let course = new Course(req.body);
        let result = await course.save();
        result = result.toObject();
        resp.send(result);
    }
})

app.get('/getCourses', async (req, resp)=>{
    const uid = req.query.uid;
    let courses = await Course.find({uid:uid});
    
    if(courses.length>0)
    {
        resp.send(courses);
    }
    else resp.send({result:"failed"});
})

app.listen(7000);