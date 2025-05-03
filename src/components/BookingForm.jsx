import React, { useState } from 'react';

const BookingForm = () => {
  const [tripType, setTripType] = useState('One Way');
  const [transportType, setTransportType] = useState('Cabs');
  const [from, setFrom] = useState('Zirakpur, Punjab');
  const [to, setTo] = useState('Kasauli, Himachal...');
  const [departure, setDeparture] = useState('14, April 2025');
  const [returnDate, setReturnDate] = useState('tap to add return date');
  const [pickupTime, setPickupTime] = useState('10:00 AM');

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Discover the World, One Journey at a Time</h1>
        <p>
          Seamlessly book flights, trains, cabs, and stays — all in one place. Your next unforgettable
          adventure begins here.
        </p>

        {/* Updated transport-types with active logic */}
        <div className="transport-types">
          {['Cabs', 'Flight', 'Trains', 'Hotels'].map((type) => (
            <button
              key={type}
              className={transportType === type ? 'active' : ''}
              onClick={() => setTransportType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="booking-form">
        {/* Trip type selection */}
        <div className="trip-types">
          <button
            className={tripType === 'One Way' ? 'active' : ''}
            onClick={() => setTripType('One Way')}
          >
            One Way
          </button>
          <button
            className={tripType === 'Outstation-Round Trip' ? 'active' : ''}
            onClick={() => setTripType('Outstation-Round Trip')}
          >
            Outstation-Round Trip
          </button>
          <button
            className={tripType === 'Airport Transfers' ? 'active' : ''}
            onClick={() => setTripType('Airport Transfers')}
          >
            Airport Transfers
          </button>
        </div>

        {/* Form fields */}
        <div className="form-fields">
          <div className="form-group">
            <label>From</label>
            <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
          </div>
          <div className="form-group">
            <label>To</label>
            <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Departure</label>
            <input type="text" value={departure} onChange={(e) => setDeparture(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Return</label>
            <input type="text" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Pickup Time</label>
            <input type="text" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} />
          </div>
        </div>

        {/* Actions */}
        <div className="form-actions">
          <button className="add-stops">Add Stops</button>
          <button className="search-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
