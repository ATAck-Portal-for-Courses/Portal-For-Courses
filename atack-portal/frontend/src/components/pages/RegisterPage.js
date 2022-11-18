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
        console.warn(username, email, password, code);
        let c = parseInt(code);

        if(c===0){
            let asgId="0";
            let result = await fetch("http://localhost:7000/registerStudent",{
                method:'post',
                body:JSON.stringify({username,email,password,asgId}),
                headers:{
                    'Content-Type':'application/json'
                }
            });
            result = await result.json();
            console.warn(result);
            // localStorage.setItem("student",JSON.stringify(result));
            if(result)
            {
                navigate('/home');
            }
            else{alert("Student already registered")}
        }
    }    

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form>
                <p>
                    <label>Username</label><br/>
                    <input type="text" required placeholder='Enter your UID'
                      value={username} onChange={(e)=>setName(e.target.value)} />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" required 
                     value={email} onChange={(e)=>setEmail(e.target.value)} />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" required 
                     value={password} onChange={(e)=>setPass(e.target.value)} />
                </p>
                <p>
                    <label>Admin Code (0 for student)</label><br/>
                    <input type="text" required 
                     value={code} onChange={(e)=>setCode(e.target.value)} />
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
