import React from "react";

const Stuform=()=>{
    return(
        <div>
            <h2>Register For Courses</h2>
                <form>
                    <p>
                        <label>Course Code</label><br/>
                        <input type="text" name = 'ccode' required placeholder='Enter The Course Code'/>
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