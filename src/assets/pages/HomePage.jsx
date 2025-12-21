import React from "react";
import HomePageNavbar from "../components/HomePageNavBar";
import WagonRCanvas from '../components/WagonRCanvas';
import rentCustomerImage from '../images/rental_customer.jpeg';
import './HomePage.css';

function HomePage() {
    return (
        <>
            <HomePageNavbar/>
            <div className="container mt-2">
                <div className="container_Box_1">
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
                           
                            <div className="rounded-3 shadow-lg bg-dark overflow-hidden" style={{ height: '400px', width: '100%', border: '1px solid #444' }}>
                                <WagonRCanvas />
                            </div>

                            <div className="text-start mt-4">
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
                                <button className="btn  btn-gold w-100 mt-4 py-2 fw-bold">EXPLORE REWARDS</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;