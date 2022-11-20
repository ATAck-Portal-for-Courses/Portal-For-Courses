import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../../App.css'


const LogInPage = ()=>{
    
    const [username, setId] = useState("");
    const [password, setPass] = useState("");

    const navigate = useNavigate();

    const authStudent = localStorage.getItem("student");
    const authTeacher =localStorage.getItem("teacher");

    useEffect(()=>{
     if(authStudent || authTeacher) navigate('/home');
    })

    const handleLoginStudent = async ()=>{
        let result = await fetch('http://localhost:7000/loginStudent',{
            method:'post',
            body:JSON.stringify({username, password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();

        console.warn(result);
        if(result){
            localStorage.setItem('student',JSON.stringify(result));
            navigate('/home');
        }
        else alert('Enter correct details!');
    }

    const handleLoginAdmin = async ()=>{
        let result = await fetch('http://localhost:7000/loginTeacher',{
            method:'post',
            body:JSON.stringify({username, password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();

        console.warn(result);
        if(result){
            localStorage.setItem('teacher',JSON.stringify(result));
            navigate('/home');
        }
        else alert('Enter correct details!');
    }

    return(
        <div className="text-center m-5-auto">
            <h2>Log-In to continue</h2>
            <form>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required 
                     value={username} onChange={(e)=> setId(e.target.value)} />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forgot password?</label></Link>
                    <br/>
                    <input type="password" name="password" required 
                     value={password} onChange={(e)=> setPass(e.target.value)} />
                </p>
                <p>
                    <button id="sub_btn" type="button" onClick={handleLoginStudent}>Login as Student</button>
                    <br/>
                    <button id="sub_btn" type="button" onClick={handleLoginAdmin}>Login as Admin</button>
                </p>
            </form>
            <footer>
                <p>First time here? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}


export default LogInPage;
