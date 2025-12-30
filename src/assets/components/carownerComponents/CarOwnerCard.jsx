import React from 'react';
import './CarOwnerCard.css';
const myFleet = [
    { id: 1, name: "Toyota Axio", plate: "WP CAS-1029", status: "On Rent", earnings: "145,000", image: "/vehicles/ToyotaAxio.jpg", utilization: 85 },
    { id: 2, name: "BMW M5", plate: "WP CBB-5588", status: "Available", earnings: "280,000", image: "/vehicles/BMWM5.jpg", utilization: 40 },
    { id: 3, name: "Toyota Camry", plate: "WP CAD-2233", status: "Maintenance", earnings: "95,000", image: "/vehicles/ToyotaCamry.jpg", utilization: 60 },
];
function CarOwnerCard() {
  return (
   <>
     <div className="fleet-grid">
                    {myFleet.map(car => (
                        <div className="fleet-card" key={car.id}>
                            <div className="car-status-badge" data-status={car.status}>{car.status}</div>
                            <div className="fleet-img-container">
                                <img src={car.image} alt={car.name} />
                            </div>
                            <div className="fleet-info">
                                <h4>{car.name}</h4>
                                <span className="plate-no">{car.plate}</span>
                                <div className="performance-metrics">
                                    <div className="m-item">
                                        <label>Monthly Earnings</label>
                                        <span className="gold-text">Rs. {car.earnings}</span>
                                    </div>
                                    <div className="m-item">
                                        <label>Utilization</label>
                                        <div className="small-bar"><div className="bar-fill" style={{width: `${car.utilization}%`}}></div></div>
                                    </div>
                                </div>
                                <div className="fleet-actions">
                                    <button className="action-btn-main">Track</button>
                                    <button className="action-btn-sub">Reports</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
   </>
  );
}
export default CarOwnerCard;