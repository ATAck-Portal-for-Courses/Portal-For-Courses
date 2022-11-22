const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
    
    courseCode:String,
    assignmentName:String,
    description:String,
    startDate:Date,
    dueDate:Date,
    file:Buffer
})