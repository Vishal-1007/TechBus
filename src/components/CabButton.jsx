import React from 'react';
import cabImg from '../assets/images/cabb.jpg';
import './CabButton.css'; // Ensure this file exists

const CabButton = () => {
  const cabList = Array(8).fill({
    title: 'Indica, Swift',
    rating: '4.2/5',
    totalRatings: '206 ratings',
    tags: 'Hatchback • AC • 4 Seats • 57 Kms included',
    extraFare: '14.5/Km after 57 Km',
    priceBefore: '2,567',
    priceNow: '1,647',
    tax: '+608 (Taxes & Charges)'
  });

  return (
    <div className="cab-section-container">
      <div className="filters-section">
        <h3>Select filters</h3>
        <form>
          <div className="filter-group">
            <strong>Cab type</strong><br />
            <label><input type="checkbox" /> HATCHBACK</label><br />
            <label><input type="checkbox" /> SEDAN</label><br />
            <label><input type="checkbox" /> SUV</label>
          </div>
          <div className="filter-group">
            <strong>Fuel Type</strong><br />
            <label><input type="checkbox" /> CNG</label><br />
            <label><input type="checkbox" /> DIESEL</label><br />
            <label><input type="checkbox" /> SUV</label>
          </div>
          <div className="filter-group">
            <strong>Cab Model</strong><br />
            <label><input type="checkbox" /> Toyota Innova</label><br />
            <label><input type="checkbox" /> Innova Crysta</label>
          </div>
        </form>
      </div>

      <div className="cab-results-wrapper">
        <div className="cancellation-banner">
          ✅ Free Cancellation before 17 Apr, 2025. 09:00 AM IST
        </div>

        {cabList.map((cab, index) => (
          <div className="cab-card" key={index}>
            <img src={cabImg} alt="cab" className="cab-image" />
            <div className="cab-info">
              <div className="cab-title-row">
                <span className="cab-title">{cab.title}</span>
                <span className="rating-badge">{cab.rating}</span>
                <span className="total-ratings">{cab.totalRatings}</span>
              </div>
              <div className="cab-tags">{cab.tags}</div>
              <div className="cab-subtitle">Compact Car</div>
              <div className="cab-options">
                <label><input type="checkbox" /> Extra Km fare</label>
                <label><input type="checkbox" /> {cab.extraFare}</label>
                <label><input type="checkbox" /> Fuel type</label>
                <label><input type="checkbox" /> CNG with refill breaks</label>
                <label><input type="checkbox" /> Cancellation</label>
                <label><input type="checkbox" /> Free till 1 hour of departure</label>
              </div>
            </div>
            <div className="cab-pricing">
              <div className="discount">13% off</div>
              <div className="strike-price">₹{cab.priceBefore}</div>
              <div className="final-price">₹{cab.priceNow}</div>
              <div className="tax-info">{cab.tax}</div>
              <button className="book-now">Book Now</button>
            </div>
          </div>
        ))}

        <button className="load-more">Load More</button>
      </div>
    </div>
  );
};

export default CabButton;
