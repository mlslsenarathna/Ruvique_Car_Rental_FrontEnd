import React, { useState } from "react";
import HomePageNavbar from "../components/HomePageNavBar";
import WagonRCanvas from '../components/WagonRCanvas';
import rentCustomerImage from '../images/rental_customer.jpeg';
import './HomePage.css';

function HomePage() {
    const [vehicleType, setVehicleType] = useState('car'); // 'car', 'bike', 'van', 'bus'
    const [hasDriver, setHasDriver] = useState(false); // true, false

    const handleSearch = () => {
      
        console.log(`Searching for: ${vehicleType}`);
        console.log(`With Driver: ${hasDriver}`);
       
    };

    return (
        <>
            <HomePageNavbar />

            {/* Hero Section: Sign Up & 3D Car */}
            <div className="hero-section text-white d-flex align-items-center justify-content-center py-5">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left: Sign-Up Calls to Action */}
                        <div className="col-md-6 text-center text-md-start p-4">
                            <h1 className="display-4 fw-bold mb-4">
                                Your Journey Starts Here with <span className="text-my-color">Ruvique Rent Car</span>
                            </h1>
                            <p className="lead mb-4">
                                Experience seamless rentals. Whether you need a ride or want to earn from your vehicle.
                            </p>
                            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-3">
                                <button className="btn btn-gold btn-lg fw-bold px-5">Sign Up as Customer</button>
                                <button className="btn btn-outline-light btn-lg fw-bold px-5">Become a Car Owner</button>
                            </div>
                        </div>

                        {/* Right: 3D Wagon R Showcase */}
                        <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ minHeight: '450px' }}>
                            <div className="rounded-3 shadow-lg bg-dark overflow-hidden" style={{ height: '450px', width: '100%', maxWidth: '600px', border: '1px solid #444' }}>
                                <WagonRCanvas />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
            {/* Existing Offer Section (Moved below search) */}
            <div className="container mt-5 mb-5">
                <div className="row align-items-center">
                    <div className="col-md-5 text-start d-flex flex-column align-items-start p-4">
                        <h2 className="text-my-color fw-light text-uppercase small mb-2">Exclusive Offers</h2>
                        <h1 className="fw-bold mb-3">We have great <span className="text-my-color">deals</span> for you.</h1>
                        <p className="text-secondary mb-4">Unlock premium rates on our elite fleet tailored just for you.</p>

                        <div className="position-relative">
                            <img src={rentCustomerImage} alt="Customer" className="img-fluid rounded-3 shadow-lg" style={{ width: '320px' }} />
                            <div className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-gold text-black p-2 px-3 fw-bold">SAVE 15%</div>
                        </div>
                    </div>

                    <div className="col-auto d-none d-md-block">
                        <div className="vr" style={{ height: '280px', opacity: 0.3 }}></div>
                    </div>

                    <div className="col-md-6 p-4">
                        <div className="text-start">
                            <h3 className="fw-light mb-1 text-secondary">Hello, Distinguished Member</h3>
                            <h1 className="display-6 fw-bold mb-4">Welcome to <span className="text-my-color">Ruvique Rent car</span></h1>

                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="p-3 border border-secondary rounded text-center">
                                        <h4 className="text-my-color mb-1">08</h4>
                                        <p className="small text-uppercase mb-0">Total Trips</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 border border-secondary rounded text-center">
                                        <h4 className="text-my-color mb-1">Elite</h4>
                                        <p className="small text-uppercase mb-0">Member Status</p>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-gold w-100 mt-4 py-2 fw-bold">EXPLORE REWARDS</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;