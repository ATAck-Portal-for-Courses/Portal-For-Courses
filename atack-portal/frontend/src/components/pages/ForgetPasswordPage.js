import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'


// const revealPassword = ()=>{

//     alert()
// }

const ForgetPasswordPage = ()=>{

    const [userID, setUserID] = useState('');
    const [answer, setAnswer] = useState('')
    const [code,setCode] = useState('');

    const revealPassword = async ()=>{
        let req = "http://localhost:7000/getUserById?username=" + userID +"&answer="+answer +"&code="+code
        let result = await fetch(req)
        result = await result.json()
        // console.log(result)+

        if(result!==false)
        {
            // console.log(result,4)
        let password = result.password
        alert("Password: "+ password)
        }
        else{
            alert("Enter correct Details")
        }
    }   



    return (
        <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            <h5>Enter your userID and answer the security question</h5>
            <form>
                <p>
                    <label id="reset_pass_lbl">User ID</label><br/>
                    <input type="text" name="userID" required
                        value={userID} onChange={(e)=> setUserID(e.target.value)} />
                </p>
                <p className='text-left'>
                    <label id="securityQuestion">(Security Question)<br />What is your mother's name?</label><br/>
                    <input type="text" name="userID" required
                    value={answer} onChange={(e)=> setAnswer(e.target.value)}  />
                </p>
                <p className='text-left'>
                    <label id="code">(0 for student)<br />Enter Code</label><br/>
                    <input type="text" name="userID" required
                    value={code} onChange={(e)=> setCode(e.target.value)}  />
                </p>
                <p>
                    <button id="sub_btn" type="button" onClick={revealPassword}>Reveal Password</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}

export default ForgetPasswordPage;