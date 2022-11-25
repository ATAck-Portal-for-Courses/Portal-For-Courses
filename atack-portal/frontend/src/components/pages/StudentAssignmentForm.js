import React, { useEffect, useState } from "react";
import CourseNav from "../navbar/CourseNav";

const AssignmentPage = ()=>{
    
    let assignmentId = window.location.pathname;
    assignmentId = assignmentId.substring(1);
    assignmentId = assignmentId.split('/')[2];
    console.log(assignmentId, 2)
    
    const [assignment,setAssignment] = useState({});
    const [file, setFile]=useState('')
    const [url, setUrl] = useState("")
    
    useEffect(()=>{
        const getAssignmentDetails= async ()=>{
            let req = 'http://localhost:7000/getAssignmentById?_id=' + assignmentId;
            let result = await fetch(req);
            // console.log(result)
            result = await result.json();
            console.log(result)
            
            // console.warn(result);
            
            if(result!=false)
            {
                setAssignment(result);
                console.log(result,1)
            }
            else return false;
            
            // let AssingmentCode = result.AssignmentCode;
            // console.log(result)
            // console.log(assignment.file.path)
            localStorage.setItem("assignment", JSON.stringify(result));
            // console.log(assignment.file, 4)
            localStorage.setItem("file",JSON.stringify(result.file))
            console.log(result.file.path,2)
            console.log(result.file.name,4)
            console.log((result.file.path).split('\\')[1],5)

            setUrl((result.file.path).split('\\')[1])
            
            
            
        }
        // console.warn(assignmentid);
        getAssignmentDetails();
    },[])


    const collectData = async ()=>{
        
    }

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
            <button type="button" class="btn btn-primary" onClick={collectData}>Submit</button>
            <p>Resources</p>
            <a href={`http://localhost:7000/${url}`} target="_blank"><button type="button">Download Resources</button></a>
          </form>
          
            
            
        </div>
    )
}

export default AssignmentPage;