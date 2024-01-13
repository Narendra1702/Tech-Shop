import React, { useState } from 'react';
import './style.css';

function LoginForm()  {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleClose = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  }

  return (
    <div>
      <button id='login' onClick={handleRegisterClick}><i class="fa-solid fa-user mx-3"></i></button>
      

      {showLogin && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <h2 style={{color:'white'}}>Login</h2>
            <p style={{color:'white'}}>New to Tech-Shop? <span onClick={handleRegisterClick} style={{cursor:'pointer'}}>Register</span></p>
            <form onSubmit={handleFormSubmit} style={{}}>
              {/* Add your login form fields here */}
              <input type="text" placeholder="  Email" />
              <input type="password" placeholder="  Password" />
              <button type="submit">Login</button>
              <p>or login with</p>
              <button class='fb'>Facebook</button>
              <button class='gg'>Google</button>
              <button class='tw'>Twitter</button>
            </form>
          </div>
        </div>
      )}

      {showRegister && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <h2 style={{color:'white'}}>Register</h2>
            <form onSubmit={handleFormSubmit}>
              {/* Add your registration form fields here */}
              <input type="text" placeholder="  Email" />
              <input type="password" placeholder="  Password" />
              <input type="confirmpassword" placeholder="  Confirm Password" />
              <button type="submit">Register</button>
              <p style={{color:'white',cursor:'pointer'}} >Already registered? <span onClick={handleLoginClick}>Login</span></p>
              <button class='fb'>Facebook</button>
              <button class='gg'>Google</button>
              <button class='tw'>Twitter</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
