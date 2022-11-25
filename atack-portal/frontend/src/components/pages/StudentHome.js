import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import StudentNav from '../navbar/StudentNav'


function Card(props) {
  return (
    <div className="card">
      <div className="card_body">
        {/* <img className='card_img'
              src={props.img} /> */}
        <h2 className="card_title">{props.courseName}</h2>
        <p className="card_description">
          {props.courseCode}
        </p>
        <a href={`/student/${props._id}`}><button className="card_btn" >View Course</button> </a>
      </div>
    </div>
  )
}


function StudentHome() {
  const navigate = useNavigate()

  // const authStudent=localStorage.getItem("student");
//   if(authStudent===null){
//     navigate('/register');
//     //alert("Please Register First")
// }

  const [courses, setCourses] = useState([]);

  
  
  useEffect(()=>{
    const authStudent=localStorage.getItem("student");
    console.log(authStudent)

    if(authStudent===null){
      navigate('/register');
      //alert("Please Register First")
    }
    
    const getCourses = async ()=>{
      let req = 'http://localhost:7000/getCourses?uid=' + uid;
      
      let result = await fetch(req);
        result = await result.json();
        // result = JSON.stringify(result);

        
        
        // console.warn(typeof(result[0]));

        if(result!=false)
        {
          setCourses(result);
          // console.warn("hmm")
        }
        else {
          // console.warn("nice")   
          return false;
        }
      }
      
      getCourses();
    },[])
    const uid = JSON.parse(localStorage.getItem("student")).username;

const renderCards =  courses.map((course, index)=>{

  console.log(course);
  // console.warn(course.body);
  // console.log("===============")
  return(
     Card(course)
  // <h2>Hi</h2>
  )
})

  return (
<>
<StudentNav />
    <HomePage/>
    <br/>
    <div className="wrapper">
      {/* <BrowserRouter>
            <StudentNav />
            <Routes>
                <Route path="/stuform" element={<stuform />} />
            </Routes>
            </BrowserRouter> */}


      {courses.length===0 ?
                <div>
                    <h3>No courses Created yet..</h3>
                </div>    :
                <div>
                    {renderCards}
                </div>
            }
    </div>

            </>
  );
}

export default StudentHome;