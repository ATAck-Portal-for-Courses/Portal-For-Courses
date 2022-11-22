import React from "react";
import { Link } from "react-router-dom";

const StudentNav=()=>{
    return(
        <div>
            <ul className="nav">
                <li><Link to="/stu-form">Register</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    )
}

export default StudentNav;