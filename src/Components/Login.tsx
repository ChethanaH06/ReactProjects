import React, { useState } from 'react';
import './Login.css';  // Add custom styles
import logo from '../Assets/icons8-logo-50.png';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/home')
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div>
        <img src={logo} alt="Logo" className="login-logo" />
        <h4>We are Tidi</h4>
        </div>
        <div className='header'>Please login to your account</div>
        <div className="form-group">
          <label htmlFor="email">Username</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            placeholder='Email Id'
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder='Password'
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        <div className="forgot-password">
          <a>Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
