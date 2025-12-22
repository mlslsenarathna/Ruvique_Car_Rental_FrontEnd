import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './LoginPage.css';
import logo from '../images/Logo2.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const LoginPage = () => {
    const navigate = useNavigate(); 

    // 1. Missing state must be defined
    const [loginData, setLoginData] = useState({
        nic: '',
        password: ''
    });

    // 2. Missing handleChange must be defined
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (!name) return; 
        setLoginData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const signIn = (e) => {
        e.preventDefault();
        console.log("Submitting Data:", loginData);
        
        axios.post('http://localhost:8888/authentication/checkPassword', loginData)
        .then(res => {
           console
            const userRole = res.data.role; 
        

            if (userRole === "Customer") {
                navigate('/customer-dashboard'); 
            } else if (userRole === "Car_Owner") {
                navigate('/carowner-dashboard'); 
            } else {
                alert("Please check Password and NIC" + userRole);
            }
        })
        .catch(err => {
            console.error("Login Error:", err);
            alert("Invalid Credentials or Server Error");
        });
    };

    return (
        <div className="login-container">
            <div className="bg-glow-effect"></div>
            <main className="form-signin-wrapper">
                <form className="p-4 my-custom-form" onSubmit={signIn}>
                    <div className="text-center">
                        <img className="mb-4" src={logo} alt="Logo" width="180" height="180" />
                        <h1 className="h3 mb-3 text-white fw-bold">Welcome to Ruvique..!</h1>
                        <h1 className="h3 mb-3 text-color fw-bold">Sign in</h1>
                    </div>

                    <div className="form-floating mb-2">
                        <input 
                            type="text" 
                            name="nic" 
                            className="form-control" 
                            value={loginData.nic}   
                            onChange={handleChange} 
                            required 
                            id="floatingInput" 
                            placeholder="NIC Number" 
                        />
                        <label htmlFor="floatingInput">NIC Number</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input 
                            type="password" 
                            name="password" 
                            className="form-control" 
                            value={loginData.password}  
                            onChange={handleChange} 
                            required 
                            id="floatingPassword" 
                            placeholder="Password" 
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input custom-checkbox" type="checkbox" id="checkDefault" />
                        <label className="form-check-label text-white" htmlFor="checkDefault">Remember me</label>
                        <label className="float-end">
                            <a href="#" className="text-white">Forgot password?</a>
                        </label>
                    </div>

                    <button className="btn my-sign-btn w-100 py-2" type="submit">Sign in</button>
                    <p className="mt-4 mb-2 text-white text-center">SG-Group PVT.LTD</p>
                    <p className="text-white text-center">© 2025–2026</p>
                </form>
            </main>
        </div>
    );
}

export default LoginPage;