import React from 'react'
import './CSS/LoginSignUp.css'

const Login = () => {
  return (
    <form className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>

        <div className="loginsignup-fields">
          <input type="text" placeholder='Username' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>

        <button>Sign Up</button>


        <div className="error-sign-up">Incorrect email or password. Please try again</div>

        <p className='loginsignup-login'>
          Already have an account? <span>Login here</span>
        </p>

        <div className="loginsignup-agree">
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