import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashbord.css'
const Dashbord = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
const navigate =useNavigate();
const handleLogout=()=>{
    localStorage.removeItem("loggedin");
    navigate('/')
}

    return (
        <div className="container">
            <div className="user-details">
               
                <h2>{userData.username}</h2>
                
            </div>
            <button className="btn btn-primary"onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashbord;
