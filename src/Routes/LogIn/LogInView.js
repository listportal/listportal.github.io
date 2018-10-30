import React from "react";
import Header from './../../Components/Header';
import { Modal } from 'react-bootstrap';
import GoogleButton from 'react-google-button'
import { BrowserRouter as Router } from 'react-router-dom'

const LogInView = ({ onSubmit, onClick, handleGoogleLogIn }) => {
  return (
    <div>
      <Header/>
      <Modal show={true}>
        <Modal.Header>
          <Modal.Title id="listModalTitle">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <div className='login-form'>
            <div className='login-email-container'>
              <label className='login-input-label'>
                Email
              </label>
              <label className='login-input-label login-input-password-label'>
                Password
              </label>
            </div>
            <div className='login-input-container'>
              <input
                className='login-input login-input-email'
                name="email"
                type="email"
                placeholder="Email"
              />
              <input
                className='login-input'
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            </div>
            <div className='login-btn-container'>
              <button type="submit" className='login-btn '>Login</button>
              <button type="submit" className='login-btn' onClick={onClick}>Sign Up</button>
            </div>
          </form>
          <div className='google-login-container'>
            <GoogleButton
                onClick={handleGoogleLogIn}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LogInView;