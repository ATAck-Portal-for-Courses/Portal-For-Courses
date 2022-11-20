/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import HomePage from './HomePage'

function Card(props){
    return(
        <div className="card">
            <div className="card_body">
                <img className='card_img'
                src={props.img} />
                <h2 className="card_title">{props.card_title}</h2>
                <p className="card_description">
                    {props.card_desc}
                </p>
                <button className="card_btn">View Course</button>
            </div>
        </div>
    )
}

const AdminHome= () => {
    return (
        <>
            <div className="header">Home</div>
            <div className='wrapper'>
                <Card
                img="https://images.unsplash.com/photo-1633493702341-4d04841df53b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGh5c2ljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                card_title="PH108"
                card_desc="Physics course offered in the spring semester for UG freshies"
                />
            </div>
            <HomePage/>
        </>
    )
}

export default AdminHome;
