import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
  const [activePage, setActivePage] = useState('Home');
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    setActivePage(page);
    switch (page) {
      case 'App':
        navigate('/App');
        break;
      case 'Dashboard':
        navigate('/Dashboard');
        break;
      case 'Location':
        navigate('/Location');
        break;
      case 'Orders':
        navigate('/Orders');
        break;
      case 'TrackYourOrder':
        navigate('/tr');
        break;
      case 'AboutUs':
        navigate('/AboutUs');
        break;
      case 'Home':
        navigate('/Home');
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="home-container">
      <div className="sidebar">
        <h2>Doorship</h2>
        <ul>
          <li onClick={() => handleNavigation('Home')} className={activePage === 'Home' ? 'active' : ''}>
            Home
          </li>
          <li onClick={() => handleNavigation('App')} className={activePage === 'App' ? 'active' : ''}>
            App
          </li>
          <li onClick={() => handleNavigation('Dashboard')} className={activePage === 'Dashboard' ? 'active' : ''}>
            Dashboard
          </li>
          <li onClick={() => handleNavigation('Location')} className={activePage === 'Location' ? 'active' : ''}>
            Location
          </li>
          <li onClick={() => handleNavigation('Orders')} className={activePage === 'Orders' ? 'active' : ''}>
            Orders
          </li>
          <li onClick={() => handleNavigation('TrackYourOrder')} className={activePage === 'TrackYourOrder' ? 'active' : ''}>
            Track Your Order
          </li>
          <li onClick={() => handleNavigation('AboutUs')} className={activePage === 'AboutUs' ? 'active' : ''}>
            About Us
          </li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="content">
        {activePage === 'Home' && (
          <div className="home-content">
            <h1>Welcome to Doorship</h1>
            <p>We are Doorship, your premier platform for seamless. Our mission is to provide top-notch services that ensure your products reach their destinations quickly and safely.</p>
            <p>With Doorship, you can easily manage and track your orders from a user-friendly interface. Whether you're a business owner or a consumer, our platform offers the flexibility and reliability you need to streamline your delivery processes.</p>
            <img 
              src="https://www.shutterstock.com/shutterstock/photos/1536731762/display_1500/stock-vector-young-girl-order-product-from-the-dropship-store-drop-shipper-order-to-the-supplier-to-deliver-the-1536731762.jpg"
              alt="Introduction"
              className="intro-image"
            />
            <footer className="footer">
              <p>&copy; {new Date().getFullYear()} Doorship. All rights reserved.</p>
            </footer>
          </div>
        )}
        {/* Add content for other pages here */}
      </div>
    </div>
  );
};

export default Home;