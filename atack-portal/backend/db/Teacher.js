const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    crsId:String
});

module.exports = mongoose.model('teachers',teacherSchema);