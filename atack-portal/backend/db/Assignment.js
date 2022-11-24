const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
    
    courseCode:String,
    assignmentName:String,
    description:String,
    startDate:String,
    dueDate:String,
    file: {
        name:String,
        path:String
    }
    }
    
)

module.exports = mongoose.model("assignments",assignmentSchema);