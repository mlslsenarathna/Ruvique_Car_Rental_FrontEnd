import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CarOwnerCard.css';
const myFleet = [
    { id: 1, name: "Toyota Axio", plate: "WP CAS-1029", status: "On Rent", earnings: "145,000", image: "/vehicles/ToyotaAxio.jpg", utilization: 85 },
    { id: 2, name: "BMW M5", plate: "WP CBB-5588", status: "Available", earnings: "280,000", image: "/vehicles/BMWM5.jpg", utilization: 40 },
    { id: 3, name: "Toyota Camry", plate: "WP CAD-2233", status: "Maintenance", earnings: "95,000", image: "/vehicles/ToyotaCamry.jpg", utilization: 60 },
];
function CarOwnerCard() {
    const [products, setProducts] = useState([]);
    const nic = sessionStorage.getItem("ownerNIC");

    useEffect(() => {
        axios.get(`http://localhost:8888/car/getCarsByOwner/${nic}`)
            .then(response => {
                setProducts(response.data);
            }
            )
    }, []);

    return (
        <>
            <div className="fleet-grid">
                {products.map((car) => (
                    <div className="fleet-card" key={car.carId}>
                       
                        <div className="car-status-badge" data-status={car.availability}>
                            {car.availability}
                        </div>

                        <div className="fleet-img-container">
                            {/* Using the imageUrl from your database */}
                            <img src={`/vehicles/${car.imageUrl}`} alt={`${car.brand} ${car.model}`} />
                        </div>

                        <div className="fleet-info">
                            {/* Concatenating Brand and Model */}
                            <h4>{car.brand} {car.model} ({car.year})</h4>
                            <span className="plate-no">{car.category} • {car.transmission}</span>

                            <div className="performance-metrics">
                                <div className="m-item">
                                    <label>Daily Rate</label>
                                    <span className="gold-text">LKR {car.dailyRate.toLocaleString()}</span>
                                </div>
                                <div className="m-item">
                                    <label>Specs</label>
                                    <span className="text-white" style={{ fontSize: '12px' }}>
                                        {car.fuelType} • {car.seats} Seats
                                    </span>
                                </div>
                            </div>

                            {/* Progress bar using mileage or a fixed utilization value */}
                            <div className="m-item mt-2">
                                <label>Fuel Efficiency</label>
                                <div className="small-bar">
                                    <div className="bar-fill" style={{ width: `${(car.mileage / 20) * 100}%` }}></div>
                                </div>
                            </div>

                            <div className="fleet-actions">
                                <button className="action-btn-main">Track</button>
                                <button className="action-btn-sub">Manage</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default CarOwnerCard;