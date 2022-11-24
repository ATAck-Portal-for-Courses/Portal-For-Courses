import React, { useEffect, useState } from "react";
// import CourseNav from "../navbar/CourseNav";

const AssignsubPage = ()=>{
    
    let assignmentid = window.location.pathname;
    assignmentid = assignmentid.substring(1);
    
    const [assignment,setAssignment] = useState('');

    useEffect(()=>{
        const getAssignmentDetails= async ()=>{
            let req = 'http://localhost:7000/getCourseById?_id=' + assignmentid;
            let result = await fetch(req);
            result = await result.json();

            // console.warn(result);
            
            if(result!=false)
            {
                setAssignment(result);
            }
            else return false;

            // let AssingmentCode = result.AssignmentCode;
            // console.log(result)
            localStorage.setItem("assingment", JSON.stringify(result));

            


        }
        // console.warn(assignmentid);
        getAssignmentDetails();
    },[])
    
    return(
        <div class="Submission">
            <h1>Submit Assignment</h1>
          <form class="Submission_form">
            {/* <CourseNav /> */}
            <p>Assignment: {assignment.assignmentName}</p>
            <p>Description:{assignment.description}</p>
            <p>Start Date: {assignment.startDate}</p>
            <p>Due Date: {assignment.dueDate}</p>

            <button type="button" class="btn btn-primary">Submit</button>
          </form>
          
            
            
        </div>
    )
}

export default AssignsubPage;