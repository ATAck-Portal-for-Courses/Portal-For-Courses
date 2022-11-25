import React from 'react'
import DatePicker from "react-datepicker";
import { useState } from 'react';

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

export default function AddAssignment() {

    const navigate = useNavigate();

    const [assignmentName, setAssignmentName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [file, setFile] = useState('');

    const collectData = async () => {
      // let id = window.location.pathname;
      // id = id.substring(1);
      // let req = 'http://localhost:7000/getCourseById?_id='+id;
      // let course = await fetch(req);
      // course = await course.json();



      // console.log(file)

      let courseCode = JSON.parse(localStorage.getItem("course")).courseCode
      // console.warn(courseCode);

      let formData = new FormData()
      formData.append('courseCode', courseCode)
      formData.append("assignmentName",assignmentName)
      formData.append("description", description)
      formData.append("startDate", startDate)
      formData.append("dueDate", dueDate)
      formData.append("file", file)


      // console.log(formData.get('courseCode'),  55)

      // console.log(JSON.stringify(formData.values()))
      console.log(typeof(file))
      const fileString = JSON.stringify(file)
      console.warn(fileString)
      // let payload = {}
      let result = await fetch('http://localhost:7000/addAssignment',{
        method:"post",
        // body:JSON.stringify({courseCode, assignmentName, description, startDate,dueDate, fileString}),
        body: formData,
        // headers:{
        //   'Content-Type':'application/json'
        
        // }
      })

      result = await result.json();

      console.log(result)

      if(!result) alert("Assignment already created");
      else{
        let id = JSON.parse(localStorage.getItem("course"))._id;
        navigate(`/admin/${id}`)
      }

        
    }
  return (
    <div className="text-center m-5-auto">
        <h3>Add Assignment</h3>
    <form>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" class="form-control" placeholder="Enter title" required="required"
             value={assignmentName} onChange={(e)=> setAssignmentName(e.target.value)} />
          </div>
          <div class="form-group">
            <label required="required">Description</label>
            <input type="text" name="description" class="form-control" placeholder="Describe in short"
             value={description} onChange={(e)=> setDescription(e.target.value)} />
          </div>
            <div class="col-5">
                <div class="input-group date" id="datepicker">
                    {/* <input type="text" class="form-control" id="date"/> */}
                    {/* <span class="input-group-append">
                    <span class="input-group-text bg-light d-block">
                    </span>
                    </span> */}
                        Start Date
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div class="input-group date" id="datepicker">
                    {/* <input type="text" class="form-control" id="date"/> */}
                    {/* <span class="input-group-append">
                    <span class="input-group-text bg-light d-block">
                    </span>
                    </span> */}
                        Due Date
                        <DatePicker selected={dueDate} onChange={(date) => setDueDate(date)} />
                </div>
            </div>
          <hr />
          <div class="form-group mt-3">
            <label class="mr-2">Upload Assignment:</label><br/>
            <input type="file" name="file" accept=".zip" multiple onChange={(e)=>setFile(e.target.files[0])} />
          </div>
          <hr />
          <button type="button" class="btn btn-primary" onClick={collectData}>Submit</button>
        </form>
    </div>
  )
}
