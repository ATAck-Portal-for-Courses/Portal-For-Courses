import React from "react";
import { Link } from "react-router-dom";

const StudentNav=()=>{
    return(
        <div>
            <ul class="nav">
                <li><Link to="/">Register</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    )
}

export default StudentNav;