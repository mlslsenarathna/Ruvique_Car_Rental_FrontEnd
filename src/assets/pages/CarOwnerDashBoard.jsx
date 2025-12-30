import React, { useState, useEffect } from "react"; // Fixed: Added useState & useEffect
import axios from "axios"; // Fixed: Added axios
import CarOwnerNavbar from "../components/CarOwnerNavbar";
import './CarOwnerDashBoard.css';



function CarOwnerDashBoard() {

    const [ownerData, setOwnerData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const nic = sessionStorage.getItem("ownerNIC");

        if (!nic) {

            window.location.href = "/login";
            return;
        }


        axios.get(`http://localhost:8888/carOwner/getOwnerByNIC/${nic}`)
            .then(res => {
                setOwnerData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Access Denied", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="loader">Loading Dashboard...</div>;
    console.log("Owner Data:", ownerData);

    return (
        <>
            <div>
                <CarOwnerNavbar />
            </div>
            <div className="owner-dashboard-body fade-in">
                <div className="mb-4">
                    <h2 >Welcome back , mr. <span className="text-my-color">{ownerData?.name || 'Owner'}</span> </h2>
                    <p className="text-muted">NIC: {sessionStorage.getItem("userNic")}</p>
                </div>

                <div className="row g-4 mb-5">

                    <div className="col-md-3">
                        <div className="business-card gradient-dark-gold">
                            <label>Last Week</label>
                            <h2>LKR 520,500</h2>
                            <span className="trend-up">+12.5% this month</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="business-card gradient-gold">
                            <label className="">Last Order</label>
                            <h2>LKR 520,500</h2>
                            <span className="trend-up">+12.5% this month</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="business-card gradient-bronze-gold">
                            <label>Last Month</label>
                            <h2>LKR 520,500</h2>
                            <span className="trend-up">12.5% this month</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="business-card gradient-metallic-gold">
                            <label>Total Revenue</label>
                            <h2>LKR 520,500</h2>
                            <span className="trend-up">+12.5% this month</span>
                        </div>
                    </div>
                </div>

                <div className="section-header d-flex justify-content-between align-items-center mb-4">
                    <h3 className="gold-text">Fleet Performance</h3>
                    <button className="add-vehicle-btn">+ List New Vehicle</button>
                </div>
                <div className="section-header d-flex justify-content-between align-items-center mb-4">
                    <h2 className=""> Events </h2>
                </div>


            </div>
        </>
    );
}

export default CarOwnerDashBoard;