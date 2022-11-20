import React from 'react'
import { Link } from 'react-router-dom'

const AdminHome= () => {
    return (
        <>
            <div>
                
            </div>
            <div className="text-center">
                <h1 className="main-title home-page-title">Welcome to ATAck portal for courses</h1>
                <Link to="/">
                    <button className="primary-button">Log out</button>
                </Link>
            </div>
        </>
    )
}

export default AdminHome;
