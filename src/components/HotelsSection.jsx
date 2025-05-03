import React from 'react';

const hotels = [
  { name: 'Lorem ipsum dolor sit amet', location: 'London, United Kingdom' },
  { name: 'Lorem ipsum dolor sit amet', location: 'Canada, United Kingdom' },
  { name: 'Lorem ipsum dolor sit amet', location: 'Bristol, United Kingdom' },
  { name: 'Lorem ipsum dolor sit amet', location: 'Nottingham, United Kingdom' },
  { name: 'Lorem ipsum dolor sit amet', location: 'Bristol, United Kingdom' },
  { name: 'Lorem ipsum dolor sit amet', location: 'York, United Kingdom' },
  { name: 'Lorem ipsum dolor sit amet', location: 'Canada, United Kingdom' },
  { name: 'Lorem ipsum dolor sit amet', location: 'London, United Kingdom' },
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
              <div className="hotel-icon" />
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
