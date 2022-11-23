import React from 'react'
import DatePicker from "react-datepicker";
import { useState } from 'react';

import "react-datepicker/dist/react-datepicker.css";
// import { set } from 'mongoose';

export default function AddAssignment() {

    const [assignmentName, setAssignmentName] = useState("");
    const [description, setDescription] = useState("");
    const [file,setFile] = useState();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const collectData = async () => {
        let courseCode="123";

        console.log(file);
        
    }
  return (
    <div className="text-center m-5-auto">
        <h3>Add Assignment</h3>
    <form>
          <div class="form-group">
            <label>Title</label>
            <input type="text" name="title" class="form-control" placeholder="Enter title" required="required" 
             value={assignmentName} onChange={(e)=>setAssignmentName(e.target.value)} />
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
                        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                </div>
            </div>
          <hr />
          <div class="form-group mt-3">
            <label class="mr-2">Upload Assignment:</label><br/>
            <input type="file" name="file" 
             value={file} onChange={(e)=>setFile(e.target.value)}  />
          </div>
          <hr />
          <button type="button" class="btn btn-primary" onClick={collectData}>Submit</button>
        </form>
    </div>
  )
}
