import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LogInPage from './components/pages/LoginPage'
// import SignUpPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import AdminHome from './components/pages/AdminHome'
import StudentHome from './components/pages/StudentHome'
import Footer from './components/pages/Footer'
import SignUpPage from './components/pages/RegisterPage'
import Stuform from './components/pages/StudentForm'
import CoursePage from './components/pages/CoursePage'
import CourseCreate from './components/pages/CourseCreate'
import AddAssignment from './components/pages/AddAssignment'
import StudentAssignmentPage from './components/pages/StudentAssignmentForm'
import AdminAssignmentPage from './components/pages/AdminAssignmentForm'
import SubmissionPage from './components/pages/AdminSubmissionPage'

import './App.css'

export default function App() {
    return (
        <>
        <div className='App'>
        <Router>
            <div>
                <Routes>
                    <Route  path="/" element={ <LandingPage /> } />
                    <Route  path="/login" element={ <LogInPage />  } />
                    <Route  path="/register" element={ <SignUpPage /> } />
                    <Route  path="/forget-password" element={ <ForgetPasswordPage /> } />
                    <Route path="/home" element={ <HomePage /> } />
                    <Route  path="/admin" element={ <AdminHome /> } />
                    <Route  path="/student" element={ <StudentHome /> }/>
                        {/* <Route path=":assignmentId" element={<AssignmentPage/>} /> */}
                
                    <Route  path="/stu-form" element={ <Stuform />}/>
                    <Route  path="/course-create" element={ <CourseCreate/> } />
                    <Route  path="/add-assignment" element={ <AddAssignment/> } />
                    <Route path="/admin/:courseId" element={ <CoursePage /> } />
                    <Route path="/student/:courseId" element={ <CoursePage /> } />
                    <Route  path="/admin/:courseId/:assignmentId" element={<AdminAssignmentPage/>} />
                    <Route path="/admin/:courseId/:assignmentId/:submissionId" element={<SubmissionPage/>} />
                    <Route  path="/student/:courseId/:assignmentId" element={<StudentAssignmentPage/>} />
                    <Route  path='/admin/hey' element={<h1>HEY!!!!!</h1>} />
                </Routes>
            </div>
        </Router>
        <Footer />
        </div>
        </>
    )
}