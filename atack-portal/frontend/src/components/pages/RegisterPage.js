import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import '../../App.css'

const SignUpPage = ()=> {

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [code, setCode] = useState("");

    const navigate = useNavigate();

    const collectData = async ()=>{

        console.log(username,email,password,code);
    
        let c = parseInt(code);
        

        if(c===0){
            let result = await fetch("http://localhost:7000/registerStudent",{
                method:'post',
                body:JSON.stringify({username,email,password}),
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
                localStorage.setItem("student",JSON.stringify(result));
                navigate('/student');
            }
            else{alert("Student already registered")}
        }
        else if(c===1879){
            let crsId=0;

            let result = await fetch("http://localhost:7000/registerTeacher",{
                method:'post',
                body:JSON.stringify({username,email,password,crsId}),
                headers:{
                    'Content-Type':'application/json'
                }
            });
            result = await result.json();
            delete result.password;
            console.warn(result);
            if(result)
            {
                localStorage.setItem("teacher",JSON.stringify(result));
                navigate('/admin');
            }
            else{alert("Teacher already registered")}

        }
    }

    const authStudent = localStorage.getItem("student");
    const authTeacher =localStorage.getItem("teacher");

    useEffect(()=>{
        if(authStudent) navigate('/student');
     else if(authTeacher) navigate('/admin');
    })
    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name = 'username' required placeholder='Enter your UID'
                     value={username} onChange={(e)=> setName(e.target.value)} />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required 
                    value={email} onChange={(e)=> setEmail(e.target.value)} />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required 
                     value={password} onChange={(e)=> setPass(e.target.value)} />
                </p>
                <p>
                    <label>Admin Code (0 for student)</label><br/>
                    <input type="text" name="code" required 
                     value={code} onChange={(e)=> setCode(e.target.value)} />
                </p>
                <p>
                    <input type="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="button" onClick={collectData}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}

export default SignUpPage;
