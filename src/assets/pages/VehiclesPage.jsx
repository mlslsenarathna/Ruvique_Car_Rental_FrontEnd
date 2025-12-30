import React, { useState } from 'react';
import CarCard from "../components/CarCard";
import CustomerNavbar from "../components/CustomerNavbar";
import './VehiclePage.css';

function VehiclePage() {
    const [filters, setFilters] = useState({
        type: 'All',
        transmission: 'All',
        fuel: 'All',
        location: ''
    });

    const handleFilterChange = (category, value) => {
        setFilters(prev => ({ ...prev, [category]: value }));
    };

    return (
        <>
        <div className="luxury-vehicle-page">
            <CustomerNavbar />
            
            {/* --- HORIZONTAL FILTER BAR --- */}
            <div className="filter-wrapper">
                <div className="horizontal-filter-bar glass-effect">
                    
                    <div className="filter-item">
                        <label><i className="bi bi-car-front"></i> Category</label>
                        <select onChange={(e) => handleFilterChange('type', e.target.value)}>
                            <option value="All">All Vehicles</option>
                            <option value="Car">Passenger Car</option>
                            <option value="Bike">Motorbike</option>
                            <option value="Wheel">Three-Wheel</option>
                            <option value="SUV">Luxury SUV</option>
                        </select>
                    </div>

                    <div className="filter-item">
                        <label><i className="bi bi-gear-wide-connected"></i> Gearbox</label>
                        <select onChange={(e) => handleFilterChange('transmission', e.target.value)}>
                            <option value="All">All Types</option>
                            <option value="Automatic">Automatic</option>
                            <option value="Manual">Manual</option>
                        </select>
                    </div>

                    <div className="filter-item">
                        <label><i className="bi bi-fuel-pump"></i> Fuel</label>
                        <select onChange={(e) => handleFilterChange('fuel', e.target.value)}>
                            <option value="All">Any Fuel</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>

                    <div className="filter-item location-item">
                        <label><i className="bi bi-geo-alt"></i> Pickup Location</label>
                        <input 
                            type="text" 
                            placeholder="Search City..." 
                            onChange={(e) => handleFilterChange('location', e.target.value)}
                        />
                    </div>

                    <div className="filter-item action-item">
                        <button className="gold-search-btn">Search</button>
                    </div>
                </div>
            </div>

            <div className="page-container">
                <main className="vehicle-grid-container">
                    <div className="grid-header">
                        <h2>Available Fleet <span className="gold-text">({filters.type})</span></h2>
                        <div className="results-count">Showing luxury results for your selection</div>
                    </div>

                    <div >
                       
                        <CarCard />
                    </div>
                </main>
            </div>
        </div>
        </>
        
    );
}

export default VehiclePage;