import React , { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseNav from '../navbar/CourseNav';

const SubmissionPage = ()=>{

    let submissionId = window.location.pathname;
    submissionId = submissionId.substring(1);
    submissionId = submissionId.split('/')[3];
    console.log(submissionId, 2)

    let navigate = useNavigate();
    
    const [submission,setSubmission] = useState({});
    // const [file, setFile]=useState('')
    const [grade,setGrade] = useState('')
    const [feedback,setFeedback] = useState('')
    const [url, setUrl] = useState("")


    useEffect(()=>{
        const getSubmissionDetails = async()=>{
            let req = 'http://localhost:7000/getSubmissionById?_id=' + submissionId;

            let result= await fetch(req);
            result = await result.json()

            if(result!==false)
            {
                setSubmission(result)
            }
            else return false;

            localStorage.setItem("submission", JSON.stringify(result));
            // console.log(assignment.file, 4)
            localStorage.setItem("file",JSON.stringify(result.file))
            console.log(result.file.path,2)
            console.log(result.file.name,4)
            console.log((result.file.path).split('\\')[1],5)

            setUrl((result.file.path).split('\\')[1])
        }

        getSubmissionDetails();
    },[])

    const collectData = async()=>{
        // let studentID = JSON.parse(localStorage.getItem("student")).username



        let result2 = await fetch("http://localhost:7000/uploadGrade",{
            method:'post',
            body:JSON.stringify({submissionId:submissionId, grade:grade, feedback:feedback}),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        result2 = await result2.json();
        
        navigate(`/admin`)
      
    }

    return(
        <div>

        <a href="/admin">Home</a>
        <div className="text-center">
            <h1>Submission</h1>
            <form>
                <div className="form-group mt-3">
                <label class="mr-2">Grade:</label>
            <input type="text" name="grade" required placeholder='Enter Grade'
                     value={grade} onChange={(e)=> setGrade(e.target.value)}/>
                     <br/><br/>
                <label class="mr-2">Feedback:</label>
            <input type="text" name="feedback" required placeholder='Enter Grade'
                     value={feedback} onChange={(e)=> setFeedback(e.target.value)}/>
                </div>
                <button type="button" class="btn btn-primary" onClick={collectData}>Submit</button><br/><br/>
                <p>
                    <b>Submission</b><br/>
                <a href={`http://localhost:7000/${url}`} target="_blank"><button type="button">Download Submission</button></a>
                </p>
            </form>
        </div>
        </div>
    )
}

export default SubmissionPage;