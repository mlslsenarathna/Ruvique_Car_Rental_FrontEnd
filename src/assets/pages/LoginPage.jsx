import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './LoginPage.css';
import logo from '../images/Logo2.jpg';


function LoginPage() {


    
    return (
        <div className="login-container">

            <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                <symbol id="check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                </symbol>
            </svg>


            <div className="bg-glow-effect"></div>

            <main className="form-signin-wrapper">
                <form className="p-4 my-custom-form">
                    <div className="text-center">
                        <img className="mb-4" src={logo} alt="Logo" width="180" height="180" />
                        <h1 className="h3 mb-3 text-white fw-bold">Welcome to Ruvique..!</h1>
                        <h1 className="h3 mb-3 text-color fw-bold">Sign in</h1>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input custom-checkbox" type="checkbox" value="remember-me" id="checkDefault" />
                        <label className="form-check-label text-white" htmlFor="checkDefault">Remember me</label>
                    </div>

                    <button className="btn my-sign-btn w-100 py-2" type="submit">Sign in</button>
                    <p className="mt-2 mb-2 text-white text-center">SG-Group PVT.LTD</p>
                    <p className="mt-2 mb-3 text-white text-center">© 2025–2026</p>
                </form>
            </main>
        </div>
    );
}

export default LoginPage;