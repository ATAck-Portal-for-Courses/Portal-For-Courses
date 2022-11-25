import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Stuform=()=>{
    
    const [courseCode, setCourseCode] = useState("");
    const [password, setPassword] = useState("");

    

    const navigate = useNavigate();
    
    const collectData = async ()=>{
        const uid = JSON.parse(localStorage.getItem("student")).username;
        let result = await fetch("http://localhost:7000/registerForCourse", {
            method:'post',
            body:JSON.stringify({courseCode, password, uid}),
            headers:{
                'Content-Type':'application/json'
            }
        });

        result =await result.json();
        if(result.result == "Enter Correct Password" || result.result == "Already Registered")
        {
            alert(result.result);
            navigate('/student');
        }
        else
        {
            navigate(`/student/${result._id}`)
        }
    }

    return(
        <div className="text-center m-5-auto">
            <h1>Register For Courses</h1>
                <form>
                    <p>
                        <label>Course Code</label><br/>
                        <input type="text" name = 'code' required placeholder='Enter The Course Code'
                         value={courseCode} onChange={(e)=> setCourseCode(e.target.value)} />
                    </p>
                    <p>
                        <label>Password</label><br/>
                        <input type="password" name="password" placeholder="Password" required
                         value={password} onChange={(e)=> setPassword(e.target.value)} />
                    </p>
                    <p>
                        <button id="sub_btn" type="button" onClick={collectData} >Register</button>
                    </p>
                </form>

        </div>
    )
}

export default Stuform;