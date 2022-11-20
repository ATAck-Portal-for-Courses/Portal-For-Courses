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

import './App.css'

export default function App() {
    return (
        <div className='App'>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={ <LandingPage /> } />
                    <Route path="/login" element={ <LogInPage />  } />
                    <Route path="/register" element={ <SignUpPage /> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage /> } />
                    <Route path="/home" element={ <HomePage /> } />
                    <Route path="/admin" element={ <AdminHome /> } />
                    <Route path="/student" element={ <StudentHome /> }/>
                </Routes>
                {/* <Footer /> */}
            </div>
            {/* <Footer /> */}
        </Router>
        <Footer />
        </div>
        // <Footer />
    )
}