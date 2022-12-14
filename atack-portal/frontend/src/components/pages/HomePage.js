import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage= () => {
    
    const navigate = useNavigate();


    const authStudent=localStorage.getItem("student");
    const authTeacher=localStorage.getItem("teacher");
    useEffect(()=>{
        // const authStudent=localStorage.getItem("student");
        // const authTeacher=localStorage.getItem("teacher");

        if(!(authStudent || authTeacher)){
            navigate('/register');
            //alert("Please Register First")
        }
    })

    

    // const Logout=()=>{
    //     localStorage.removeItem("student");
    //     localStorage.removeItem("teacher");
    // }
    
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Welcome to ATAck portal for courses</h1>
            {/* <Link to="/">
                <button className="primary-button" onClick={Logout}>Log out</button>
            </Link> */}
        </div>
    )
}

export default HomePage;
