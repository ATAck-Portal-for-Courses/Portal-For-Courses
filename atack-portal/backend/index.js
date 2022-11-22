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


    let auth = await Student.findOne({ username: username });

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

app.post('/registerTeacher', async (req, resp) => {
    const username = req.body.username;

    const auth = await Teacher.findOne({ username: username });

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

app.post('/loginStudent', async (req, resp) => {

    let student = await Student.findOne(req.body).select("-password");

    resp.send(student ? student : false);

})

app.post('/loginTeacher', async (req, resp) => {
    let teacher = await Teacher.findOne(req.body).select("-password");
    resp.send(teacher ? teacher : false);
})


app.post('/addCourse', async (req, resp) => {
    const auth = await Course.findOne(req.body);

    if (auth) {
        // alert("Course has already been added by you.");
        resp.send(false);
    }
    else {
        let course = new Course(req.body);
        let result = await course.save();
        result = result.toObject();
        resp.send(result);
    }
})

app.get('/getCourses', async (req, resp) => {
    const uid = req.query.uid;
    let courses = await Course.find({ uid: uid });

    if (courses.length > 0) {
        resp.send(courses);
    }
    else resp.send(false);
})

app.get('/getCourseById', async (req, resp) => {
    const id = req.query._id;
    let course = await Course.findOne({ _id: id });

    if (course != false) resp.send(course);
    else resp.send(false);
})

app.post('/registerForCourse', async (req, resp) => {
    const uid = req.body.uid;
    const courseCode = req.body.courseCode;
    const password = req.body.password;
    // resp.send(req.body);


    const auth1 = await Course.findOne({ courseCode: courseCode, password: password });
    if (!auth1) resp.send({result:"Enter Correct Password"});
    else {
        const auth2 = await Course.findOne({ courseCode: courseCode, uid: uid });
        if (auth2) resp.send({result:"Already Registered"});
        else {
            let course = await Course.findOne({ courseCode: courseCode });
            // course = course.toObject();
            let courseName = course.courseName;

            let newEntry = new Course({courseName:courseName, courseCode:courseCode,
                     password:password, uid:uid});
            
            let result = await newEntry.save();
            result = result.toObject();
            resp.send(result);
        
    }
    }
})


app.listen(7000);