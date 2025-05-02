import React from 'react';

const TripPlanning = () => {
  return (
    <section className="trip-planning">
      <div className="container">
        <h1>How Do I Plan My Trip?</h1>
        <p>Discover places, explore traveler stories, and customize your adventure — all in one place.</p>
        
        <button className="start-planning-btn">Start Planning Now</button>
        
        <div className="planning-steps">
          <div className="step">
            <h3>Explore Destinations</h3>
            <ul>
              <li>
                <input type="checkbox" id="browse-cities" />
                <label htmlFor="browse-cities">Browse cities, nature escapes, or offbeat spots</label>
              </li>
              <li>
                <input type="checkbox" id="filter-vibe" />
                <label htmlFor="filter-vibe">Filter by vibe: Solo, Scenic, Foodie, Cultural</label>
              </li>
            </ul>
          </div>
          
          <div className="step">
            <h3>Create Your Itinerary</h3>
            <ul>
              <li>
                <input type="checkbox" id="add-places" checked readOnly />
                <label htmlFor="add-places">Add must-see places, food stops, and hidden gems</label>
              </li>
              <li>
                <input type="checkbox" id="customize" checked readOnly />
                <label htmlFor="customize">Customize based on your interests & time</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPlanning;