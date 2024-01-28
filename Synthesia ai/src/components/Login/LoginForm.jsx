import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Signup from './Signup';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <div className="loginForm flex h-screen flex-col justify-center items-center p-10">
        <form className="p-8 rounded-md">
          <h1 className="formHead text-5xl text-white font-bold mb-4 text-center">Log In</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-medium">Email or Phone Number</label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border text-white bg-transparent border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border text-white bg-transparent border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btnForm w-full text-white py-2 rounded-md hover:bg-black focus:outline-none focus:ring focus:border-blue-300 hover:text-white"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <br />
        <p>or</p>
        <br />
        <div className="formImg flex flex-row content-center justify-between items-center">
            <img className='h-14 w-14 me-4' src="../../src/assets/Google logo.png" alt="" />
            <img className='h-14 w-14 me-4' src="../../src/assets/Microsoft logo.png" alt="" />
        </div>
        <br />
        <p><a href="#">Forgot Password</a></p>
        <br />
        <br />
        <b>Don't have an account? <NavLink to="/signup" >SIGN UP</NavLink></b>
      </div>

    </>
  );
};

export default LoginForm;
