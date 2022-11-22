import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StudentNav from './StudentNav'

function StudentHome() {
    return (
      <div className="student">
            {/* <BrowserRouter>
            <StudentNav />
            <Routes>
                <Route path="/stuform" element={<stuform />} />
            </Routes>
            </BrowserRouter> */}
            <StudentNav />
      </div>

      
    );
  }
  
export default StudentHome;