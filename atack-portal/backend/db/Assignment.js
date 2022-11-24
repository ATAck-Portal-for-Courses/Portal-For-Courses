const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
    
    courseCode:String,
    assignmentName:String,
    description:String,
    startDate:Date,
    dueDate:Date,
    file: {
        name:String,
        path:String
    }
    }
    
)

module.exports = mongoose.model("assignments",assignmentSchema);