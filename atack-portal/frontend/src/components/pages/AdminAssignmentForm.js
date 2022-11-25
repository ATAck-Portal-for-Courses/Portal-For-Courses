import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";


function Card(props, assignmentID) {
    // console.log(typeof(date),11)
    return (
        <div className="card">
            <div className="card_body">
                <h2 className="card_title">{props.studentID}</h2>
                <p className="card_description">
                    <b>Grade:</b>{props.grade}<br/>
                    <b>Feedback:</b>{props.feedback}
                </p>
            </div>
            <Link to={`${props._id}`} ><button className="card_btn" >View Submission</button></Link>

        </div>

    )
}

const AdminAssignmentForm = () => {
    const [submission, setSubmission] = useState([]);
    useEffect(() => {
        const getSubmissions = async () => {
            let assignmentID = window.location.pathname;
            assignmentID = assignmentID.substring(1);
            assignmentID = assignmentID.split('/')[2];
            console.log(assignmentID
                ,2)
            let req2 = 'http://localhost:7000/getSubmissions?assignmentID=' + assignmentID;
                console.log(req2,3)
            let result2 = await fetch(req2);
            result2 = await result2.json();
            // console.warn(req2);
    
            // console.log(result2);
            if (result2 !== false) {
                setSubmission(result2);
            }
            else return false;
    
    
        }
        getSubmissions();
    }, [])

    const renderCards = submission.map((submission, index) => {
        // console.log(typeof(assignment.dueDate))
        // console.log(assignment);
        // console.warn(course.body);
        // console.log("===============")
        let assignmentID = window.location.pathname;
            assignmentID = assignmentID.substring(1);
        return (
            Card(submission, assignmentID)
            // <h2>Hi</h2>
        )
    })


    return (
        <div>
            <h1>Submissions:</h1>
            <br />
            <div className="wrapper">
                {submission.length === 0 ?
                    <div>
                        <h3>No submissions added yet...</h3>
                    </div> :
                    <div>
                        {renderCards}
                    </div>

                }
            </div>
        </div>
    )
}

export default AdminAssignmentForm;