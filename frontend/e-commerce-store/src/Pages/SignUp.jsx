import React, { use, useContext } from 'react'
import './CSS/SignUp.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const SignUp = () => {

  //auth context to pass set user
  const { setUser } = useContext(AuthContext);

  //initial form values - empty as user will type in values that get updated in the handleChange(e) based on e
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });


  //handling current input 
  const [checkbox, setCheckBox] = useState(true);
  const handleCheckBox = (e) => {
    setCheckBox(e.target.checked);
    console.log(checkbox + "has been checked");
  }

  // handle users name change based on the event that a user types it updates these strings simultaneously
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });


  }

  //check if the users inputs are valid
  const validateFormData = ({ username, email, password }) => {
    if (!username || !email || !password) return false;

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  //when the user submits their data the from must handle it with this function below
  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmitData = (e) => {
    e.preventDefault();
    // when form username , email and password are empty we display fill all fields in 
    if (!formData.username || !formData.email || !formData.password) {
      setHasError(true);
      setErrorText('Please fill in all fields.');
      hideErrorAfterDelay();
      return;
    }
    //validatee the users email
    if (!validateFormData(formData)) {
      setHasError(true);
      setErrorText('Invalid email format.');
      hideErrorAfterDelay();
      return;
    }
    //make sure the checkbox is checked
    if (!checkbox) {
      setHasError(true);
      setErrorText('You must accept the Privacy Policy to continue.');
      hideErrorAfterDelay();
      return;
    }

    //once  the users actual details are receieved we set that user to a registredUser object because they have signed up
    localStorage.setItem('registeredUser', JSON.stringify(formData));
    //used for local storing to compare user === registered user
    localStorage.setItem('user', JSON.stringify(formData));

    //set form data
    setUser(formData);
    //form has finalled been submitted after all the checks above
    setFormSubmit(true);
    toast.success(`Account created successfully, ${formData.username}!`);
  };

  //ERROR HANDLING
  const [hasError, setHasError] = useState(false);
  const [errorText, setErrorText] = useState('');


  //timed error 
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
          Already have an account? <Link to='/login'><span>Login here</span></Link>
        </p>

        <div className="loginsignup-agree" onChange={handleChange}>
          <input
            type='checkbox'
            checked={checkbox}
            onChange={handleCheckBox}
          />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        <p className='form-footer'>
          Copyright &copy; 2025 | All rights reserved.
        </p>
      </div>
    </form>

  )
}

export default SignUp