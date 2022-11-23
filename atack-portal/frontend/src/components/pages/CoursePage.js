import React, { useEffect, useState } from "react";


const CoursePage = ()=>{
    
    let courseId = window.location.pathname;
    courseId = courseId.substring(1);
    
    const [course,setCourse] = useState('');

    useEffect(()=>{
        const getCourseDetails= async ()=>{
            let req = 'http://localhost:7000/getCourseById?_id=' + courseId;
            let result = await fetch(req);
            result = await result.json();

            console.warn(result);
            
            if(result!=false)
            {
                setCourse(result);
            }
            else return false;

            let courseCode = course.courseCode;

            


        }
        // console.warn(courseId);
        getCourseDetails();
    },[])
    
    return(
        <div>
            <h1>{course.courseName}</h1>
        </div>
    )
}

export default CoursePage;