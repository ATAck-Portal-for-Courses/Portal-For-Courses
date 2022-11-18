import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'


const LogInPage = ()=>{
    return(
        <div className="text-center m-5-auto">
            <h2>Log-In to continue</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forgot password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login as Student</button>
                    <br/>
                    <button id="sub_btn" type="submit">Login as Admin</button>
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
