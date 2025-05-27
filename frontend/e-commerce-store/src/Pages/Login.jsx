import React from 'react'
import './CSS/LoginSignUp.css'
import { useState } from 'react';

const Login = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [formSubmit, setFormSubmit] = useState(false);


  const [hasError, setHasError] = useState(false);
  const [errorText, setErrorText] = useState('');


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(name);
    console.log(value);
  }

  const validateFormData = ({ username, email, password }) => {
    if (!username || !email || !password) return false;


    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmitData = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setHasError(true);
      setErrorText('Please fill all fields.');
      hideErrorAfterDelay();
      return;
    }

    if (!validateFormData(formData)) {
      setHasError(true);
      setErrorText('Invalid email format.');
      hideErrorAfterDelay();
      return;
    }

    setHasError(false);
    setErrorText('');
    console.log('Data has been submitted!');
  };

  const hideErrorAfterDelay = () => {
    setTimeout(() => {
      setHasError(false);
      setErrorText('');
    }, 2000);
  };



  return (
    <form onSubmit={handleSubmitData} className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>

        <div className="loginsignup-fields">
          <input
            type="text"
            name='username'
            value={formData.username}
            placeholder='Username'
            onChange={handleChange}
          />

          <input
            type="email"
            name='email'
            value={formData.email}
            placeholder='Email Address'
            onChange={handleChange}
          />
          <input
            type="password"
            name='password'
            value={formData.password}
            placeholder='Password'
            onChange={handleChange}
          />

        </div>

        <button type="submit">Sign Up</button>


        {hasError && (
          <div className="error-sign-up" style={{ color: 'red' }}>
            {errorText}
          </div>
        )}


        <p className='loginsignup-login'>
          Already have an account? <span>Login here</span>
        </p>

        <div className="loginsignup-agree" onChange={handleChange}>
          <input type='checkbox' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        <p className='form-footer'>
          Copyright &copy; 2025 | All rights reserved.
        </p>
      </div>
    </form>

  )
}

export default Login