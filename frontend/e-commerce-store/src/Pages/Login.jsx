import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login = () => {
  const { setUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [hasError, setHasError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [formSubmit, setFormSubmit] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setFormData({
        email: parsedUser.email || '',
        password: parsedUser.password || ''
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateFormData = ({ email, password }) => {
    if (!email || !password) return false;
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const hideErrorAfterDelay = () => {
    setTimeout(() => {
      setHasError(false);
      setErrorText('');
    }, 2000);
  };

  const handleSubmitData = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
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


    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
    if (
      !registeredUser ||
      registeredUser.email !== formData.email ||
      registeredUser.password !== formData.password
    ) {
      setHasError(true);
      setErrorText('Incorrect email or password.');
      hideErrorAfterDelay();
      return;
    }

    localStorage.setItem('user', JSON.stringify(registeredUser));
    setUser(registeredUser);
    setFormSubmit(true);
    toast.success(`Welcome back, ${registeredUser.username}!`);
  };

  return (
    <form onSubmit={handleSubmitData} className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Log In</h1>
        <div className="loginsignup-fields">
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
        <button type="submit">Login</button>
        <p>
          First time here? <Link to="/signup"><span>Create your account</span></Link> and explore all we have to offer.
        </p>
        {hasError && (
          <div className="error-login" style={{ color: 'red' }}>
            {errorText}
          </div>
        )}

        <p className='form-footer'>
           &copy;AMCA 2025 | All rights reserved.
        </p>
      </div>
    </form>
  );
};

export default Login;
