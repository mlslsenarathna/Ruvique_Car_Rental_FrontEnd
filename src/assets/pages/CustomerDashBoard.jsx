import CustomerNavbar from "../components/CustomerNavbar";
import React from "react";
import './CustomerDashBoard.css';
import rentCustomerImage from '../images/rental_customer.jpeg';

function CustomerDashboard() {
    return (
        <>
            <CustomerNavbar />
            
            <div className="container mt-5">
                <div className="container_Box_1">
                    <div className="row align-items-center">
                        {/* Left Section: Image and Deal Promo */}
                        <div className="col-md-5 text-start d-flex flex-column align-items-start p-4">
                            <h2 className="text-my-color fw-light tracking-widest text-uppercase small mb-2">
                                Exclusive Offers
                            </h2>
                            <h1 className="fw-bold mb-3" style={{ fontSize: '2.2rem' }}>
                                We have great <span className="text-my-color">deals</span> for you.
                            </h1>
                            <p className="text-secondary mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                                Unlock premium rates on our elite fleet. From weekend getaways to executive travel, 
                                experience the gold standard of luxury car rentals tailored just for you.
                            </p>
                            
                            <div className="position-relative">
                                <img
                                    src={rentCustomerImage}
                                    alt="Mercedes S-Class"
                                    className="img-fluid rounded-3 shadow-lg"
                                    style={{ 
                                        width: '320px', 
                                        objectFit: 'contain',
                                        filter: 'brightness(0.9) contrast(1.1)' 
                                    }}
                                />
                                {/* Optional Badge */}
                                <div className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-gold text-black p-2 px-3 fw-bold">
                                    SAVE 15%
                                </div>
                            </div>
                        </div>

                        {/* Vertical Divider */}
                        <div className="col-auto d-none d-md-block">
                            <div className="vr text-my-color" style={{ height: '280px', opacity: 0.3 }}></div>
                        </div>

                        {/* Right Section: Welcome and Dashboard Overview */}
                        <div className="col-md-6 p-4">
                            <div className="text-start">
                                <h3 className="fw-light mb-1 text-secondary">Hello, Distinguished Member</h3>
                                <h1 className="display-6 fw-bold mb-4">Welcome to <span className="text-my-color">Ruvique</span></h1>
                                
                                <p className="mb-4" style={{ color: '#aaa' }}>
                                    Your personal dashboard is designed to provide seamless access to your bookings, 
                                    preferred vehicle history, and loyalty rewards. Your next adventure is only a 
                                    click away.
                                </p>

                                <div className="row g-3">
                                    <div className="col-6">
                                        <div className="p-3 border border-secondary rounded text-center h-100">
                                            <h4 className="text-my-color mb-1">08</h4>
                                            <p className="small text-uppercase mb-0">Total Trips</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="p-3 border border-secondary rounded text-center h-100">
                                            <h4 className="text-my-color mb-1">Elite</h4>
                                            <p className="small text-uppercase mb-0">Member Status</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="btn btn-gold w-100 mt-4 py-2">
                                    EXPLORE REWARDS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomerDashboard;