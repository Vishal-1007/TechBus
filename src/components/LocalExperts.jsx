import React from 'react';

const LocalExperts = () => {
  return (
    <section className="local-experts">
      <div className="stats">
        <p>10,000+ travelers have discovered unforgettable journeys on Triplane</p>
        <div className="avatar-ring">
          {/* Avatar images positioned in a circular layout */}
          <div className="avatar avatar1"><img src="avatar1.jpg" alt="user" /></div>
          <div className="avatar avatar2"><img src="avatar2.jpg" alt="user" /></div>
          <div className="avatar avatar3"><img src="avatar3.jpg" alt="user" /></div>
          <div className="avatar avatar4"><img src="avatar4.jpg" alt="user" /></div>
          <div className="avatar avatar5"><img src="avatar5.jpg" alt="user" /></div>
          <div className="avatar avatar6"><img src="avatar6.jpg" alt="user" /></div>
          <div className="avatar avatar7"><img src="avatar7.jpg" alt="user" /></div>
          <div className="avatar avatar8"><img src="avatar8.jpg" alt="user" /></div>

          {/* Testimonials */}
          <div className="testimonial testimonial1">
            Aarav found offbeat hill stations with fewer crowds
          </div>
          <div className="testimonial testimonial2">
            Mira planned her entire food trail across South India in 15 minutes
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalExperts;
