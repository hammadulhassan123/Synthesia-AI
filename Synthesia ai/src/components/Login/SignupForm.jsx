import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <form className="loginForm w-full max-w-md mx-auto bg-transparent text-white rounded-md text-center flex h-screen flex-col justify-center items-center p-10">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block  text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          className="w-full mt-1 p-2 border text-white bg-transparent border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block  text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          className="w-full mt-1 p-2 border text-white bg-transparent border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block   text-sm font-medium">Phone</label>
        <input
          type="text"
          id="phone"
          className="w-full mt-1 p-2 border text-white bg-transparent border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block   text-sm font-medium">Password</label>
        <input
          type="password"
          id="password"
          className="w-full mt-1 p-2 border text-white bg-transparent border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block   text-sm font-medium">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          className="w-full mt-1 p-2 border text-white bg-transparent border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btnForm w-full text-white py-2 rounded-md hover:bg-black focus:outline-none focus:ring focus:border-blue-300 hover:text-white"
        onClick={handleSignup}
      >
        Sign Up
      </button>
      <p>or</p>
        <br />
        <div className="formImg flex flex-row content-center justify-between items-center">
            <img className='h-14 w-14 me-4' src="../../src/assets/Google logo.png" alt="" />
            <img className='h-14 w-14 me-4' src="../../src/assets/Microsoft logo.png" alt="" />
        </div>
        <br />
        <b>Already have an account? <NavLink to="/login" >Log-In</NavLink></b>
    </form>
    
  );
};

export default SignupForm;
