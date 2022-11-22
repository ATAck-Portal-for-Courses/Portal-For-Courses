const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName: String,
    courseCode: String,
    password: String,
    uid:String
})

module.exports = mongoose.model("courses", courseSchema);