import React, { useEffect, useState, useNavigate } from "react";
import CourseNav from "../navbar/CourseNav";

// const [assignment,setAssignment] = useState('');
    // const [file, setFile]=useState('')


const AssignmentPage = ()=>{
    

    // const navigate = useNavigate();
    
    const collectData = async () => {

        let courseCode = JSON.parse(localStorage.getItem("course")).courseCode
        let studentid = JSON.parse(localStorage.getItem("student")).username
        // console.warn(courseCode);
    
        let assignmentId = window.location.pathname;
        assignmentId = assignmentId.substring(1);
        assignmentId = assignmentId.split('/')[1];
    
        let Submission_formData = new FormData()
        Submission_formData.append('courseCode', courseCode)
        Submission_formData.append("username", studentid)
        Submission_formData.append("assignmentId", assignmentId)
        Submission_formData.append("file", file)
        

        console.log(typeof(file))
        const fileString = JSON.stringify(file)
        console.warn(fileString)
        // let payload = {}
        let result = await fetch('http://localhost:7000/addAssignment',{
          method:"post",
          // body:JSON.stringify({courseCode, assignmentName, description, startDate,dueDate, fileString}),
          body: Submission_formData,
          // headers:{
          //   'Content-Type':'application/json'
          
          // }
        })
  
        result = await result.json();
  
        console.log(result)
  
        if(!result) alert("Assignment already created");
        else{
          let id = JSON.parse(localStorage.getItem("course"))._id;
        //   navigate(`/${id}`)
        }
  
    }

    let assignmentId = window.location.pathname;
    assignmentId = assignmentId.substring(1);
    assignmentId = assignmentId.split('/')[1];
    // console.log(assignmentId, 2)
    
    const [assignment,setAssignment] = useState('');
    const [file, setFile]=useState('')

    useEffect(()=>{
        const getAssignmentDetails= async ()=>{
            let req = 'http://localhost:7000/getAssignmentById?_id=' + assignmentId;
            let result = await fetch(req);
            // console.log(result)
            result = await result.json();
            // console.log(result)

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
            <label class="mr-2">Submit Assignment:</label><br/>
            <input type="file" name="file" multiple onChange={(e)=>setFile(e.target.files[0])} />
            </div>

            <p>Grades: </p>
            <p>Feedback: </p>
            <button type="button" class="btn btn-primary" >Submit</button>
          </form>
          
            
            
        </div>
    )
}

export default AssignmentPage;