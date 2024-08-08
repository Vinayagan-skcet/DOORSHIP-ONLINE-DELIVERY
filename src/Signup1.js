import React, { useState } from 'react';
import './Signup1.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';

const Signup1 = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePanel = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await axios.post('http://localhost:8080/api/signup', { username: name, email, password });
      alert('Sign up successful!');
      setIsRightPanelActive(false);
    } catch (error) {
      console.error('Sign up error:', error);
      alert('Sign up failed');
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/signin', { username: email, password });
      alert('Sign in successful!');
      // Redirect to another page if necessary
    } catch (error) {
      console.error('Sign in error:', error);
      alert('Sign in failed');
    }
  };

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <span className="big-circle">
        <span className="inner-circle"></span>
      </span>
      <img src="https://i.imgur.com/wcGWHvx.png" className="square" alt="square design" />
      <div className="form-container sign-up-container">
        <form onSubmit={handleSignUp}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <div className="infield">
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <label></label>
          </div>
          <div className="infield">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label></label>
          </div>
          <div className="infield">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label></label>
          </div>
          <div className="infield">
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <label></label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleSignIn}>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <div className="infield">
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label></label>
          </div>
          <div className="infield">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label></label>
          </div>
          <a href="#" className="forgot">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button onClick={togglePanel}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button onClick={togglePanel}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup1;
