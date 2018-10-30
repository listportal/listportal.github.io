import React from "react";
import Header from './../../Components/Header';
import { Modal } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom'

const SignUpView = ({ onSubmit }) => {
  return (
    <div>
      <Header/>
      <Modal show={true}>
        <Modal.Header>
          <Modal.Title id="listModalTitle">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <div className='login-form'>
            <div className='login-email-container'>
              <label className='signup-input-label'>
                Email
              </label>
              <label className='signup-input-label signup-input-password-label'>
                Password
              </label>
            </div>
            <div className='login-input-container'>
              <input
                className='login-input signup-input-email'
                name="email"
                type="email"
                placeholder="Email"
              />
              <input
                className='login-input signup-input-email'
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            </div>
            <div className='login-btn-container'>
              <button type="submit" className='login-btn' >Sign Up</button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignUpView;