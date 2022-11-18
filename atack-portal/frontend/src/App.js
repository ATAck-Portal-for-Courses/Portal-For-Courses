import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LogInPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import Footer from './components/pages/Footer'

import './App.css'

export default function App() {
    return (
        <div className='App'>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={ <LandingPage /> } />
                    <Route path="/login" element={ <LogInPage />  } />
                    <Route path="/register" element={ <RegisterPage /> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage /> } />
                    <Route path="/home" element={ <HomePage /> } />
                </Routes>
                <Footer />
            </div>
        </Router>
        </div>
    )
}