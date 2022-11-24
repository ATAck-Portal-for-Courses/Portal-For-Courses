import React, { useEffect, useState } from "react";
import CourseNav from "../navbar/CourseNav";

const AssignmentPage = ()=>{
    
    let assignmentId = window.location.pathname;
    assignmentId = assignmentId.substring(1);
    assignmentId = assignmentId.split('/')[1];
    console.log(assignmentId, 2)
    
    const [assignment,setAssignment] = useState('');

    useEffect(()=>{
        const getAssignmentDetails= async ()=>{
            let req = 'http://localhost:7000/getCourseById?_id=' + assignmentId;
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
            <h1 class="">Submit Assignment</h1>
          <form class="Submission_form">
            {/* <CourseNav /> */}
            <p>Assignment: {assignment.assignmentName}</p>
            <p>Description:{assignment.description}</p>
            <p>Start Date: {assignment.startDate}</p>
            <p>Due Date: {assignment.dueDate}</p>


            <div class="form-group mt-3">
            <label class="mr-2">Upload Assignment:</label><br/>
            <input type="file" name="file" multiple onChange={(e)=>setFile(e.target.files[0])} />
            </div>

            <button type="button" class="btn btn-primary">Submit</button>
          </form>
          
            
            
        </div>
    )
}

export default AssignsubPage;