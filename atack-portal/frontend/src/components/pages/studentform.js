import React from "react";

const Stuform=()=>{
    return(
        <div className="text-center m-5-auto">
            <h1>Register For Courses</h1>
                <form>
                    <p>
                        <label>Course Code</label><br/>
                        <input type="text" name = 'code' required placeholder='Enter The Course Code'/>
                    </p>
                    <p>
                        <label>Password</label><br/>
                        <input type="password" name="password" placeholder="Password" required />
                    </p>
                    <p>
                        <button id="sub_btn" type="button" >Register</button>
                    </p>
                </form>

        </div>
    )
}

export default Stuform;