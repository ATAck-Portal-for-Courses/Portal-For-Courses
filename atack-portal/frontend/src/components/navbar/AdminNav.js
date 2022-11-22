import React from 'react'
import { NavLink } from 'react-router-dom';

export default function AdminNav() {

    const Logout=()=>{
        localStorage.removeItem("student");
        localStorage.removeItem("teacher");
    }
  return (
    <nav>
        <div>
            <NavLink to='/admin'>Home</NavLink>
        </div>
        <div>
            <NavLink to='/course-create'><button>Create New Course</button></NavLink>
            <NavLink to='/'><button onClick={Logout}>Logout</button></NavLink>
            
        </div>
    </nav>
  )
}
