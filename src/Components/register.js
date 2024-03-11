// import React, { useState } from 'react';
// import './reg.css';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     const navigate = useNavigate();
//     const [input, setInput] = useState({
//         username: '',
//         email: '',
//         firstName: '',
//         lastName: '',
//         dob: '',
//         password: '',
//         avatar: '',
//         avatarPreview: '', // To store the base64 string of the uploaded image
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         localStorage.setItem("user", JSON.stringify(input));
//         navigate("/");
//     };

//     const handleInputChange = (e) => {
//         const { name, value, files } = e.target;
//         if (files && files[0]) {
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 setInput({
//                     ...input,
//                     avatar: files[0], // stror
//                     avatarPreview: e.target.result
//                 });
//             };
//             reader.readAsDataURL(files[0]); 
//         } else {
//             setInput({
//                 ...input,
//                 [name]: value
//             });
//         }
//     };

//     return (
//         <div>
//             <div className="container">
//                 <h2>User Registration Form</h2>
//                 <form onSubmit={handleSubmit} encType="multipart/form-data">
//                     <div className="form-group">
//                         <label htmlFor="username">Username:</label>
//                         <input type="text" id="username" name="username" value={input.username} onChange={handleInputChange} required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="first_name">First Name:</label>
//                         <input type="text" id="first_name" name="firstName" value={input.firstName} onChange={handleInputChange} required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="last_name">Last Name:</label>
//                         <input type="text" id="last_name" name="lastName" value={input.lastName} onChange={handleInputChange} required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email:</label>
//                         <input type="email" id="email" name="email" value={input.email} onChange={handleInputChange} required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="dob">Date of Birth:</label>
//                         <input type="date" id="dob" name="dob" value={input.dob} onChange={handleInputChange} required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password:</label>
//                         <input type="password" id="password" name="password"
//                          value={input.password}
//                          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
//                          title="Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number."
//                          required 
//                         onChange={handleInputChange}  />
                    
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="avatar">Avatar:</label>
//                         <input type="file" id="avatar" name="avatar" accept="image/*" onChange={handleInputChange} required />
//                         {input.avatarPreview && (
//                             <img src={input.avatarPreview} alt="Avatar Preview" className="avatar-preview" style={{ maxWidth: '200px', maxHeight: '200px', marginTop: '10px' }}/>
//                         )}
//                     </div>
//                     <div className="form-group">
//                         <input type="submit" value="Submit" />
//                     </div>
//                     <div className="reg-links">
//                         <p>you have an alrady account? <a href="/">Login</a></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Register;


import React, { useState, useEffect } from 'react';
import './reg.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        dob: '',
        password: '',
        avatar: '',
        avatarPreview: '', // To store the base64 string of the uploaded image
    });

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("loggedin");
        if (isLoggedIn) {
            navigate('/dashbord');
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/dashbord");
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (files && files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setInput({
                    ...input,
                    avatar: files[0], // stror
                    avatarPreview: e.target.result
                });
            };
            reader.readAsDataURL(files[0]); 
        } else {
            setInput({
                ...input,
                [name]: value
            });
        }
    };

    return (
        <div>
             <div className="container">
                 <h2>User Registration Form</h2>
                 <form onSubmit={handleSubmit} encType="multipart/form-data">
                     <div className="form-group">
                         <label htmlFor="username">Username:</label>
                         <input type="text" id="username" name="username" value={input.username} onChange={handleInputChange} required />
                     </div>
                     <div className="form-group">
                         <label htmlFor="first_name">First Name:</label>
                         <input type="text" id="first_name" name="firstName" value={input.firstName} onChange={handleInputChange} required />
                     </div>
                     <div className="form-group">
                         <label htmlFor="last_name">Last Name:</label>
                         <input type="text" id="last_name" name="lastName" value={input.lastName} onChange={handleInputChange} required />
                     </div>
                     <div className="form-group">
                         <label htmlFor="email">Email:</label>
                         <input type="email" id="email" name="email" value={input.email} onChange={handleInputChange} required />
                     </div>
                     <div className="form-group">
                         <label htmlFor="dob">Date of Birth:</label>
                         <input type="date" id="dob" name="dob" value={input.dob} onChange={handleInputChange} required />
                     </div>
                     <div className="form-group">
                         <label htmlFor="password">Password:</label>
                         <input type="password" id="password" name="password"
                          value={input.password}
                          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                          title="Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number."
                          required 
                         onChange={handleInputChange}  />
                    
                     </div>
                     <div className="form-group">
                         <label htmlFor="avatar">Avatar:</label>
                         <input type="file" id="avatar" name="avatar" accept="image/*" onChange={handleInputChange} required />
                         {input.avatarPreview && (
                             <img src={input.avatarPreview} alt="Avatar Preview" className="avatar-preview" style={{ maxWidth: '200px', maxHeight: '200px', marginTop: '10px' }}/>
                         )}
                     </div>
                     <div className="form-group">
                         <input type="submit" value="Submit" />
                     </div>
                     <div className="reg-links">
                         <p>you have an alrady account? <a href="/">Login</a></p>
                     </div>
                 </form>
             </div>
         </div>
    );
}

export default Register;
