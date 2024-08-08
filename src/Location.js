import React, { useState } from 'react';
import './Location.css';

const calculateDeliveryTime = (from, to) => {
  // Dummy implementation for delivery time calculation
  // You can replace this with a real API call to calculate delivery time
  const distance = Math.random() * 100; // Simulate a distance calculation
  const time = (distance / 40) * 60; // Assume an average speed of 40 km/h
  return time.toFixed(2);
};

const Location = () => {
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [deliveryTime, setDeliveryTime] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const time = calculateDeliveryTime(fromAddress, toAddress);
    setDeliveryTime(time);
  };

  const handleOrderPlaced = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
    }, 3000); // Hide the popup after 3 seconds
  };

  return (
    <div className="location-container">
      <h2>Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from">From Address:</label>
          <input
            type="text"
            id="from"
            value={fromAddress}
            onChange={(e) => setFromAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="to">To Address:</label>
          <input
            type="text"
            id="to"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate Time</button>
      </form>
      {deliveryTime && (
        <div className="result">
          <p>Estimated Delivery Time: {deliveryTime} minutes</p>
          <button onClick={handleOrderPlaced}>OK</button>
        </div>
      )}
      {orderPlaced && (
        <div className="popup">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/017/110/950/original/green-check-mark-icon-animation-animated-check-mark-on-white-background-free-video.jpg" alt="Green Tick" className="tick-image" />
          <p>Your order has been placed!</p>
        </div>
      )}
    </div>
  );
};

export default Location;
