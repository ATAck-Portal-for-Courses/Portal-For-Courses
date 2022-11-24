import React, { useEffect, useState } from "react";
import CourseNav from "../navbar/CourseNav";


function Card(props){
    return(
        <div className="card">
            <div className="card_body">
                {/* <img className='card_img'
                src={props.img} /> */}
                <h2 className="card_title">{props.assignmentName}</h2>
                <p className="card_description">
                    <b>Due Date:  </b> 
                    {props.dueDate}
                </p>
                <button className="card_btn" >Download Assignment</button> 
                
            </div>
        </div>
    )
}

const CoursePage = ()=>{
    
    // let courseId = window.location.pathname;
    // courseId = courseId.substring(1);
    
    const [course,setCourse] = useState('');
    const [assignments,setAssignments] = useState([]);

    useEffect(()=>{
        const getCourseDetails= async ()=>{
            let courseId = window.location.pathname;
            courseId = courseId.substring(1);

            let req = 'http://localhost:7000/getCourseById?_id=' + courseId;
            let result = await fetch(req);
            result = await result.json();

            console.warn("hey");
            
            if(result!=false)
            {
                setCourse(result);
            }
            else return false;

            // let courseCode = result.courseCode;
            // console.log(result)
            localStorage.setItem("course", JSON.stringify(result));

            


        }
        getCourseDetails();
    },[])
    
    
    const getAssignments = async ()=>{
        let req2 = 'http://localhost:7000/getAssignments?courseCode=' + course.courseCode;
        
        let result2 = await fetch(req2);
        result2 = await result2.json();
        console.warn(req2);
        
        console.log(result2);
        if(result2!==false)
        {
            setAssignments(result2);
        }
        else return false;
        
        
    }
    // console.warn(courseId);
    getAssignments();
    

    const renderCards =  assignments.map((assignment, index)=>{

        console.log(assignment);
        // console.warn(course.body);
        // console.log("===============")
        return(
           Card(assignment)
        // <h2>Hi</h2>
        )
    })


    return(
        <div>
            <CourseNav />
            <h1>{course.courseName}</h1>
            <br/>
            <div className="wrapper">
                {assignments.length===0?
                <div>
                    <h3>No assignments added yet...</h3>    
                </div> :
                <div>
                    {renderCards}
                </div>

            }
            </div>
        </div>
    )
}

export default CoursePage;