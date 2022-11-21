/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import HomePage from './HomePage'

function Card(props){
    return(
        <div className="card">
            <div className="card_body">
                {/* <img className='card_img'
                src={props.img} /> */}
                <h2 className="card_title">{props.name}</h2>
                <p className="card_description">
                    {props.code}
                </p>
                <button className="card_btn">View Course</button>
            </div>
        </div>
    )
}

const AdminHome= () => {
    
    const [courses, setCourses] = useState([]);

    const uid = JSON.parse(localStorage.getItem("teacher")).username;

    
    useEffect(()=>{
        const getCourses = async ()=>{
            let req = 'http://localhost:7000/getCourses?uid=' + uid;
    
            let result = await fetch(req);
            result = await result.json();
            // result = JSON.stringify(result);
    
            
            
            console.warn(typeof(result[0]));
    
            if(result!=false)
            {
                setCourses(result);
                
            }
            else return false;
        }

        getCourses();
    },[])


    const renderCards =  courses.map((course, index)=>{

        console.log(course);
        // console.warn(course.body);
        // console.log("===============")
        return(
           Card(course)
        // <h2>Hi</h2>
        )
    })
    
    
    return (
        <>
            <HomePage/>
            <br/>
            <div className='wrapper' >
                {/* <Card
                img="https://images.unsplash.com/photo-1633493702341-4d04841df53b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGh5c2ljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                card_title="PH108"
                card_desc="Physics course offered in the spring semester for UG freshies"
                />
                <Card
                img="https://images.unsplash.com/photo-1633493702341-4d04841df53b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGh5c2ljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                card_title="PH108"
                card_desc="Physics course offered in the spring semester for UG freshies"
                /> */}

                {courses.length===0 ?
                <div>
                    <h3>No courses Created yet..</h3>
                </div>    :
                <div>
                    {renderCards}
                </div>
            }
            </div>
        </>
    )
}

export default AdminHome;
