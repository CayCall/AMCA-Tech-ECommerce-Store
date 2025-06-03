import React, { useState } from 'react';
import './Newsletter.css'

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const displaySuccess = () => {
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      setSuccessMessage(false);
      return;
    }

    setSuccessMessage(true);
    setErrorMessage('');
    setEmail('');

    setTimeout(() => {
      setSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className='newsletter'>
      <h1>Sign Up For Exclusive Deals & News</h1>
      <p>Subscribe to our newsletter</p>
      <div>
        <input
          type="text"
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className='btn-variation-1' onClick={displaySuccess}>Subscribe</button>
      </div>
      {/*don't forget to come back to this and make the success condition work*/ }
      {successMessage && <p className='success-message'>Thank you for Subscribing to our newsletter.</p>}
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
    </div>
  );
};

export default Newsletter;
