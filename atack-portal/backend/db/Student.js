const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

module.exports = mongoose.model('students',studentSchema);