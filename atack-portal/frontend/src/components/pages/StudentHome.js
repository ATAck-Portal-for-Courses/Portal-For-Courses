import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentNav from './StudentNav'

function StudentHome() {
    return (
      <div className="student">
            <StudentNav />
            <h1>Bhar na bsdk</h1>     
      </div>
    );
  }
  
export default StudentHome;