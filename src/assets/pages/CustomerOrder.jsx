import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CustomerOrder.css"; 
import CustomerNavbar from "../components/CustomerNavbar";

function CustomerOrder() {
    const [carDetails, setCarDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pickupDate, setPickupDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [withDriver, setWithDriver] = useState(false);
    
    const carId = sessionStorage.getItem("selectedCarId");
    const driverCostPerDay = 5000; 

    useEffect(() => {
        if (carId) {
            axios.get(`http://localhost:8888/car/getCarById/${carId}`)
                .then(res => {
                    setCarDetails(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error:", err);
                    setLoading(false);
                });
        }
    }, [carId]);

    // Logic to calculate total days and price
    const calculateTotal = () => {
        if (!pickupDate || !returnDate) return carDetails.dailyRate;
        const start = new Date(pickupDate);
        const end = new Date(returnDate);
        const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) || 1;
        const basePrice = days * carDetails.dailyRate;
        const driverPrice = withDriver ? days * driverCostPerDay : 0;
        return basePrice + driverPrice;
    };

    if (loading) return <div className="luxury-loader"><span>Polishing the Chrome...</span></div>;

    return (
        <>
        <CustomerNavbar/>
         <div className="order-page-wrapper">
            <div className="bg-splash splash-1"></div>
            <div className="bg-splash splash-2"></div>
        
            
            <div className="order-container fade-in">
                <div className="order-grid">
                    
                    {/* LEFT: VISUAL PREVIEW */}
                    <div className="car-showcase-section">
                        <div className="glass-card car-main-card">
                            <div className="image-wrapper">
                                <img src={`/vehicles/${carDetails.imageUrl}`} alt={carDetails.model} />
                            </div>
                            <div className="car-title-info">
                                <span className="category-badge">{carDetails.category} Series</span>
                                <h1>{carDetails.brand} {carDetails.model}</h1>
                                <div className="luxury-line"></div>
                                <div className="spec-grid">
                                    <div className="spec-item"><i className="bi bi-speedometer2"></i> {carDetails.fuelType}</div>
                                    <div className="spec-item"><i className="bi bi-cpu"></i> {carDetails.transmission}</div>
                                    <div className="spec-item"><i className="bi bi-door-open"></i> {carDetails.seats} Seats</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: CONFIGURATION & BILLING */}
                    <div className="booking-details-section">
                        <div className="glass-card booking-summary-card">
                            <h2 className="section-title">Configure Your Journey</h2>
                            
                            <div className="date-inputs-group">
                                <div className="input-box">
                                    <label>Pickup Date</label>
                                    <input type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
                                </div>
                                <div className="input-box">
                                    <label>Return Date</label>
                                    <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
                                </div>
                            </div>

                            <div className="driver-toggle-box" onClick={() => setWithDriver(!withDriver)}>
                                <div className="toggle-info">
                                    <h4>Request Personal Chauffeur</h4>
                                    <p>Professional driver service (+LKR 5,000/day)</p>
                                </div>
                                <div className={`toggle-switch ${withDriver ? 'active' : ''}`}>
                                    <div className="switch-handle"></div>
                                </div>
                            </div>

                            <div className="price-breakdown">
                                <div className="price-row">
                                    <span>Base Rental</span>
                                    <span>LKR {carDetails.dailyRate.toLocaleString()}</span>
                                </div>
                                {withDriver && (
                                    <div className="price-row driver-row">
                                        <span>Chauffeur Service</span>
                                        <span>LKR {driverCostPerDay.toLocaleString()}</span>
                                    </div>
                                )}
                                <div className="price-row total-row">
                                    <span>Total Amount</span>
                                    <span className="total-gold">LKR {calculateTotal().toLocaleString()}.00</span>
                                </div>
                            </div>

                            <button className="luxury-pay-btn">
                                <span className="btn-text">Confirm Booking</span>
                                <span className="btn-icon"><i className="bi bi-arrow-right"></i></span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
       
    );
}

export default CustomerOrder;