import React from 'react';
import tripplanning from '../assets/images/localexperts.png';
import localexpert from '../assets/images/localexperts1.png';

const LocalExperts = () => {
  return (
    <section className="local-experts">
      <div className="content-wrapper">

        {/* Image section - now on the left */}
        <div className="image-content">
          <img src={tripplanning} alt="Trip Planning Banner" />
          <img src={localexpert} alt="Expert Banner" />
        </div>

        {/* Text section - now on the right */}
        <div className="text-content">
          <p className="heading-text">
            10,000+ travelers have discovered unforgettable journeys on Triplane
          </p>
        </div>

      </div>
    </section>
  );
};

export default LocalExperts;
