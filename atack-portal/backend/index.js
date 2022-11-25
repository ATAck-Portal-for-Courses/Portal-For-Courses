const express = require('express');
const cors = require("cors");
require('./db/config');
// const bodyParser = require('body-parser')
const multer = require('multer')
// var storage = multer.memoryStorage();
// const storage = multer.
// const storage = multer.diskStorage({

//     filename: function (req, file, callback) {
//         callback(null, file.originalname);
//     }
// })
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assignments')
    },
    filename: (req, file, cb) => {
        cb(null, (Date.now().toString()) + "_" + file.originalname)
    }
})



const upload = multer({ storage: storage })

const fs = require('fs');

const Student = require('./db/Student');
const Teacher = require('./db/Teacher');
const Course = require('./db/Course');
const Assignment = require('./db/Assignment');
const path = require('path');
const Submission = require('./db/Submission');
// const { diskStorage } = require('multer');

require('./db/config')


const app = express();
app.use(cors());
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json())
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true, parameterLimit: 20000 }))
app.use('/', express.static('assignments'))


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

    if (course !== "false") {
        // course = await course.toObject();
        resp.send(course)
    }
    else resp.send(false);
})

app.post('/registerForCourse', async (req, resp) => {
    const uid = req.body.uid;
    const courseCode = req.body.courseCode;
    const password = req.body.password;
    // resp.send(req.body);


    const auth1 = await Course.findOne({ courseCode: courseCode, password: password });
    if (!auth1) resp.send({ result: "Enter Correct Password" });
    else {
        const auth2 = await Course.findOne({ courseCode: courseCode, uid: uid });
        if (auth2) resp.send({ result: "Already Registered" });
        else {
            let course = await Course.findOne({ courseCode: courseCode });
            // course = course.toObject();
            let courseName = course.courseName;

            let newEntry = new Course({
                courseName: courseName, courseCode: courseCode,
                password: password, uid: uid
            });

            let result = await newEntry.save();
            result = result.toObject();
            resp.send(result);

        }
    }
})


app.get('/getAssignments', async (req, resp) => {
    const courseCode = req.query.courseCode;
    let assignment = await Assignment.find({ courseCode: courseCode });

    if (assignment.length > 0) {
        resp.send(assignment);
    }
    else resp.send(false);

})

app.get('/getAssignmentById', async (req, resp) => {
    const id = req.query._id;
    console.log(id)
    let assignment = await Assignment.findOne({ _id: id });

    if (assignment != null) {
        // assignment = assignment.toObject()
        resp.send(assignment);
    }
    else resp.send(false);
})


app.post('/addAssignment', upload.single('file'), async (req, resp) => {

    // console.warn("HIi")
    // let fileData = req.file.buffer
    // let fileType = req.file.fileType;
    let courseCode = req.body.courseCode;
    let assignmentName = req.body.assignmentName;
    let description = req.body.description;
    let startDate = req.body.startDate;
    let dueDate = req.body.dueDate;
    let name = req.file.originalname;
    let path = req.file.path;

    let file = { name: name }

    let payload = { courseCode: courseCode, assignmentName: assignmentName }
    // console.log(payload)



    const auth = await Assignment.findOne(payload);
    console.log(auth)

    if (auth) {
        // let path = req.file.path;
        let loc = __dirname + "\\" + path;
        try {
            fs.unlinkSync(loc)
        } catch (err) {
            console.error(err)
        }

        resp.send(false);
    }
    else {
        file = { name: name, path: path }
        payload = {
            courseCode: courseCode, assignmentName: assignmentName, description: description,
            startDate: startDate, dueDate: dueDate, file: file
        }
        console.log(payload)
        let assignment = new Assignment(payload);
        let result = await assignment.save();
        result = result.toObject();
        resp.send(result);
    }
    // resp.send(false)
})


app.post('/addSubmission', upload.single('file'), async (req, resp) => {
    // console.log(req.body,1)
    // console.log(req.file,2)
    // resp.send(false)

    let studentID = req.body.studentID
    let assignmentID = req.body.assignmentID

    let filter = { studentID: studentID, assignmentID: assignmentID }

    let file = { name: req.file.originalname, path: req.file.path }

    let update = { file: file, grade: req.body.grade, feedback: req.body.feedback }


    const auth = await Submission.findOne(filter)

    if (auth) {
        let loc = __dirname + '\\' + auth.file.path
        try {
            fs.unlinkSync(loc)
        } catch (err) {
            console.error(err)
        }

        await Submission.findOneAndRemove(filter)
    }

    // let result = await Submission.findOneAndUpdate(filter, update, {
    //     new: true,
    //     upsert: true
    // })
        // let file = {name:req.file.originalname, path:req.file.path}
        payload = {studentID:studentID, assignmentID:assignmentID,
                    file:file, grade:req.body.grade, feedback:req.body.feedback}
        let submission = new Submission(payload)
        let result = await submission.save()

    resp.send(result)
})

app.get('/getUserById', async (req, resp)=>{
    console.log(req.query)
    let username = req.query.username
    let securityQuestion = req.query.answer
    let code = req.query.code
    if(code==="0"){
        let result = await Student.findOne({username:username, securityQuestion:securityQuestion}) 
        if(result!=null)
        {
            resp.send(result)

        }
        else resp.send(false)
    }
    else if(code==="1879")
    {
        let result = await Teacher.findOne({username:username, securityQuestion:securityQuestion}) 
        if(result!=null)
        {
            resp.send(result)

        }
        else resp.send(false)
    }
    else resp.send(false)
})

app.listen(7000);