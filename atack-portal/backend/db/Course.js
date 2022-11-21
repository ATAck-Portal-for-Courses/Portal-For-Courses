const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    name: String,
    code: String,
    password: String,
    uid:String
})

module.exports = mongoose.model("courses", courseSchema);