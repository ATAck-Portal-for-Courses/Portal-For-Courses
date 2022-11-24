import React from 'react'
import DatePicker from "react-datepicker";
import { useState } from 'react';

import "react-datepicker/dist/react-datepicker.css";

export default function AddAssignment() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const collectData = async () => {
        
    }
  return (
    <div className="text-center m-5-auto">
        <h3>Add Assignment</h3>
    <form>
          <div class="form-group">
            <label>Title</label>
            <input type="text" name="title" class="form-control" placeholder="Enter title" required="required" />
          </div>
          <div class="form-group">
            <label required="required">Description</label>
            <input type="text" name="description" class="form-control" placeholder="Describe in short" />
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
                <div class="input-group date" id="datepicker">npm
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
            <input type="file" name="file" />
          </div>
          <hr />
          <button type="button" class="btn btn-primary" onClick={collectData}>Submit</button>
        </form>
    </div>
  )
}
