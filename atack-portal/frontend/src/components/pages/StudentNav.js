import React from "react";
import { Link } from "react-router-dom";



const Logout=()=>{
    localStorage.removeItem("student");
    localStorage.removeItem("teacher");
}


const StudentNav=()=>{
    return(
        <div>
            <ul className="nav">
                <li><Link to="/stu-form">Register</Link></li>
                <li><Link to="/"><button onClick={Logout}>Logout</button></Link></li>
            </ul>
        </div>
    )
}

export default StudentNav;