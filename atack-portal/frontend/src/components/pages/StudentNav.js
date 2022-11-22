import React from "react";
import { Link } from "react-router-dom";



const Logout = () => {
    localStorage.removeItem("student");
    localStorage.removeItem("teacher");
}


const StudentNav = () => {
    return (
        <div>
            <Link to="/stu-form"><button>Register</button></Link>
            <Link to="/"><button onClick={Logout}>Logout</button></Link>
        </div>
    )
}

export default StudentNav;