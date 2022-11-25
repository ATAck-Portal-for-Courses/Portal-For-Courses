const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
    
    studentID:String,
    assignmentID:String,
    file: {
        name:String,
        path:String
    },
    grade:String,
    feedback:String
})

module.exports = mongoose.model("submissions",submissionSchema);