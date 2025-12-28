import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CarCard.css';

function CarCard() {
  const [cars, setCars] = useState([]);

const getImageUrl = (imageFileName) => {
  if (!imageFileName) {
    return "https://via.placeholder.com/300";
  }
  return `/vehicles/${imageFileName}`;
};
  useEffect(() => {
    axios.get("http://localhost:8888/car/getAllCars")
      .then(res => {
        setCars(res.data);
      })
      .catch(err => {
        console.error("Connection Error:", err);
      });
  }, []);

  return (
    <div className='container py-5'>
      <div className='row justify-content-center'>
        {cars.map((car) => (console.log(car.imageUrl),
          <div className="col-12 mb-5" key={car.carId}>
            <div className="creative-card">
              <div className="card-image-wrapper">
                <img
                
                  src={getImageUrl(car.imageurl)}
                  alt={`${car.brand} ${car.model}`}
                />
                <div className={`status-badge ${car.availability ? car.availability.toLowerCase() : 'unknown'}`}>
                  {car.availability}
                </div>
              </div>

              <div className="card-content-wrapper">
                <div className="content-header">
                  <span className="cat-text">{car.category}</span>
                  <h2 className="title-text">{car.brand} {car.model}</h2>
                  <p className="subtitle-text">{car.year} | {car.color} | {car.fuelType}</p>
                </div>

                <div className="specs-row">
                  <div className="spec-box">
                    <span>Gear</span>
                    <strong>{car.transmission}</strong>
                  </div>
                  <div className="spec-box">
                    <span>Seats</span>
                    <strong>{car.seats}</strong>
                  </div>
                  <div className="spec-box">
                    <span>Mileage</span>
                    <strong>{car.mileage}k</strong>
                  </div>
                </div>

                <div className="content-footer">
                  <div className="price-tag">
                    <span className="currency">Rs.</span>
                    <span className="price">{car.dailyRate}</span>
                    <span className="per-day">.00</span>
                  </div>
                  <button className="action-btn">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarCard;