const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    securityQuestion:String
});

module.exports = mongoose.model('teachers',teacherSchema);