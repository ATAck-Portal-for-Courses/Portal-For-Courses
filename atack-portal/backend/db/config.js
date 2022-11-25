const mongoose = require("mongoose");

const connect = async()=>{
await mongoose.connect("mongodb+srv://akshat:akshat12345@atack-portal.02hznp7.mongodb.net/Atack-portal");
}
connect()