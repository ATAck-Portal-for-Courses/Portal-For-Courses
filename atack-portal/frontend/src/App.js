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
import CoursePage from './components/pages/CoursePage'
import CourseCreate from './components/pages/CourseCreate'
import AddAssignment from './components/pages/AddAssignment'

import './App.css'

export default function App() {
    return (
        <>
        <div className='App'>
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={ <LandingPage /> } />
                    <Route exact path="/login" element={ <LogInPage />  } />
                    <Route exact path="/register" element={ <SignUpPage /> } />
                    <Route exact path="/forget-password" element={ <ForgetPasswordPage /> } />
                    <Route exact path="/home" element={ <HomePage /> } />
                    <Route exact path="/admin" element={ <AdminHome /> } />
                    <Route exact path="/student" element={ <StudentHome /> }/>
                    <Route exact path="/:courseId" element={ <CoursePage /> }/>
                    <Route exact path="/course-create" element={ <CourseCreate/> } />
                    <Route exact path="/add-assignment" element={ <AddAssignment/> } />
                </Routes>
            </div>
        </Router>
        <Footer />
        </div>
        </>
    )
}