// TrackYourOrder.js
import React, { useState, useEffect } from 'react';
import './Trackyourorder.css'; // Import the CSS for TrackYourOrder

const TrackYourOrder = () => {
  const [order, setOrder] = useState({
    id: 'Order1',
    fromAddress: '123 Pickup St, City',
    toAddress: '456 Delivery Ave, City',
    deliveryTime: '30 mins',
    status: 'On the way'
  });

  useEffect(() => {
    // Fetch order details from an API or other source here if needed
    // setOrder(fetchedOrder);
  }, []);

  return (
    <div className="track-order-container">
      <h2>Track Your Order</h2>
      <div className="order-summary">
        <h3>Order ID: {order.id}</h3>
        <p><strong>From:</strong> {order.fromAddress}</p>
        <p><strong>To:</strong> {order.toAddress}</p>
        <p><strong>Estimated Delivery Time:</strong> {order.deliveryTime}</p>
        <p><strong>Status:</strong> {order.status}</p>
      </div>
      <div className="map-placeholder">
        <p>Map showing route from {order.fromAddress} to {order.toAddress}.</p>
      </div>
    </div>
  );
};

export default TrackYourOrder;
