const express = require('express');
const cors = require("cors");
require('./db/config');
const Student = require('./db/Student');
const Teacher = require('./db/Teacher');


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

app.listen(7000);