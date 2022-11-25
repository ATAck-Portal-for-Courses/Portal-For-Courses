const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    securityQuestion: String
});

module.exports = mongoose.model('students',studentSchema);