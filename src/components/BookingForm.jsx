import React, { useState } from 'react';
import flightImg from '../assets/images/airplanep.png';
import cabImg from '../assets/images/cabp.png';
import hotelImg from '../assets/images/hotelp.png';
import trainImg from '../assets/images/trainp.png';

import planeBg from '../assets/images/plane.jpg';
import trainBg from '../assets/images/train.jpg';
import hotelBg from '../assets/images/hotel.jpg';
import cabBg from '../assets/images/cab.jpg';

const BookingForm = () => {
  const [tripType, setTripType] = useState('One Way');
  const [transportType, setTransportType] = useState('Cabs');
  const [from, setFrom] = useState('Zirakpur, Punjab');
  const [to, setTo] = useState('Kasauli, Himachal...');
  const [departure, setDeparture] = useState('14, April 2025');
  const [returnDate, setReturnDate] = useState('tap to add return date');
  const [pickupTime, setPickupTime] = useState('10:00 AM');

  // Transport options with icons
  const transportOptions = [
    { type: 'Cabs', icon: cabImg },
    { type: 'Flight', icon: flightImg },
    { type: 'Trains', icon: trainImg },
    { type: 'Hotels', icon: hotelImg },
  ];

  // Map transport type to background image
  const backgroundImages = {
    Cabs: cabBg,
    Flight: planeBg,
    Trains: trainBg,
    Hotels: hotelBg,
  };

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImages[transportType]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '40px',
        borderRadius: '12px',
        color: '#fff',
      }}
    >
      <div className="hero-content" style={{ padding: '50px', borderRadius: '8px' }}>
        <h1>Discover the World, One Journey at a Time</h1>
        <p>
          Seamlessly book flights, trains, cabs, and stays — all in one place.
          Your next unforgettable adventure begins here.
        </p>

        {/* Transport types */}
        <div className="transport-types" style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
          {transportOptions.map(({ type, icon }) => (
            <button
              key={type}
              className={transportType === type ? 'active' : ''}
              onClick={() => setTransportType(type)}
              style={{
                display: 'flex',
                alignItems: 'center',
                
               
                cursor: 'pointer',
                fontSize: '16px',
                padding: '4px 12px',
                color: '#fff',
                fontWeight: transportType === type ? 'bold' : 'normal',
               
              }}
            >
              <img
                src={icon}
                alt={type}
                style={{ width: '20px', height: '17px', marginRight: '10px' }}
              />
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="booking-form" style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
        {/* Trip type selection */}
        <div className="trip-types" style={{ marginBottom: '12px' }}>
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
        <div className="form-actions" style={{ marginTop: '10px' }}>
          <button className="add-stops">Add Stops</button>
          <button className="search-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
