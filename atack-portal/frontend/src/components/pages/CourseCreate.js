import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const CourseCreate = ()=> {

    const [courseName, setCourseName] = useState("");
    const [courseCode, setCourseCode] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // const uid = localStorage.getItem("teacher").username;
    // console.log(uid);

    const collectData = async ()=>{
        const uid = JSON.parse(localStorage.getItem("teacher")).username;
        console.log(uid);
        console.log(courseName,courseCode,password);
        let result = await fetch("http://localhost:7000/addCourse",{
        method:'post',
        body:JSON.stringify({courseName,courseCode,password,uid}),
        headers:{
            'Content-Type':'application/json'
        }
        });
        result = await result.json();
        delete result.password;
        console.warn(result);
        // localStorage.setItem("student",JSON.stringify(result));
        if(result)
        {
            navigate('/admin');
        }
        else{alert("Course already exists.")}
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Create a new course</h2>
            <form>
                <p>
                    <label>Course Name</label><br/>
                    <input type="text" name = 'courseName' required placeholder='Enter Course Name'
                     value={courseName} onChange={(e)=> setCourseName(e.target.value)} />
                </p>
                <p>
                    <label>Course Code</label><br/>
                    <input type="text" name="course-code" required 
                    value={courseCode} onChange={(e)=> setCourseCode(e.target.value)} />
                </p>
                <p>
                    <label>Course Password</label><br/>
                    <input type="password" name="course-password" required 
                     value={password} onChange={(e)=> setPassword(e.target.value)} />
                </p>
                <p>
                    <button id="sub_btn" type="button" onClick={collectData}>Create Course</button>
                </p>
            </form>
            <footer>
                <p><Link to="/admin">Back to Admin Page</Link>.</p>
            </footer>
        </div>
    )

}

export default CourseCreate;