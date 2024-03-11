import React, { useState } from 'react';
import './log.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user"));
        if (input.userName === loggedUser.userName||input.email === loggedUser.email && input.password === loggedUser.password)
         {
            localStorage.setItem("loggedin",true)
            navigate("/Dashbord");
         }
        else {
            alert("Wrong email or password");
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>  
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">username & Email:</label>
                    <input type="text" id="email" name="email" value={input.email||input.userName} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={input.password} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <input type="submit" value="Login" />
                </div>
            </form>
            <div className="reg-links">
                <p>Don't have an account? <a href="/register">Register</a></p>
            </div>
        </div>
    );
}

export default Login;
