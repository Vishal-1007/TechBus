import React from 'react';
import hotel1 from '../assets/images/hotel1.png';
import hotel2 from '../assets/images/hotel2.png';
import hotel3 from '../assets/images/hotel3.png';
import hotel4 from '../assets/images/hotel4.png';
import hotel5 from '../assets/images/hotel5.png';
import hotel6 from '../assets/images/hotel6.png';
import hotel7 from '../assets/images/hotel7.png';
import hotel8 from '../assets/images/hotel8.png';

const hotels = [
  { name: 'Lorem ipsum dolor sit amet', location: 'London, United Kingdom', image: hotel1 },
  { name: 'Lorem ipsum dolor sit amet', location: 'Canada, United Kingdom', image: hotel2 },
  { name: 'Lorem ipsum dolor sit amet', location: 'Bristol, United Kingdom', image: hotel3 },
  { name: 'Lorem ipsum dolor sit amet', location: 'Nottingham, United Kingdom', image: hotel4 },
  { name: 'Lorem ipsum dolor sit amet', location: 'Bristol, United Kingdom', image: hotel5 },
  { name: 'Lorem ipsum dolor sit amet', location: 'York, United Kingdom', image: hotel6 },
  { name: 'Lorem ipsum dolor sit amet', location: 'Canada, United Kingdom', image: hotel7 },
  { name: 'Lorem ipsum dolor sit amet', location: 'London, United Kingdom', image: hotel8 },
];

const HotelsSection = () => {
  return (
    <section className="hotels-section">
      <div className="hotels-container">
        <div className="hotels-header">
          <div>
            <h2>Top <span>Hotels in UK</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur. Morbi tempor proin rhoncus malesuada pharetra. Tellus et.</p>
          </div>
          <button className="browse-btn">Browse All Hotels</button>
        </div>

        <div className="hotels-grid">
          {hotels.map((hotel, index) => (
            <div className="hotel-card" key={index}>
              <img src={hotel.image} alt="hotel logo" className="hotel-icon" />
              <p className="hotel-title">{hotel.name}</p>
              <p className="hotel-location">{hotel.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;
