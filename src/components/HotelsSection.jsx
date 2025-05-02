import React from 'react';

const HotelsSection = () => {
  return (
    <section className="hotels-section">
      <div className="container">
        <h2>Top Hotels in UK</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Morbi tempor proin rhoncus malesuada pharetra. Tellus et.</p>
        
        <button className="browse-btn">Browse All Hotels</button>
        
        <div className="hotels-grid">
          <div className="hotel-card">
            <h3>MTO</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Porttitor duis.</p>
            <p>Canada, United Kingdom</p>
          </div>
          
          <div className="hotel-card">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Bristol, United Kingdom</p>
          </div>
          
          <div className="hotel-card">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Nottingham, United Kingdom</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;