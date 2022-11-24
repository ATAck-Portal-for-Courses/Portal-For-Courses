import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CourseNav() {
    const Logout=()=>{
        localStorage.removeItem("student");
        localStorage.removeItem("teacher");
    }
    const AddAss=()=>{

    }
  return (
    <nav>
        <div>
            <NavLink to='/admin'>Home</NavLink>
        </div>
        <div>
            <NavLink to='/course-create'><button>Create New Course</button></NavLink>
            <NavLink to='/'><button onClick={Logout}>Logout</button></NavLink>
            <div>
                {/* <input class="form-control" type="file" id="formFileMultiple" multiple /> */}
                <Link to='/add-assignment' ><button onClick={AddAss}>Add Assignment</button> </Link>
            </div>
        </div>
    </nav>
  )
}
