import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import LLMHome from './LLMHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons';

const  LLMNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <header className='NavHeader'>
        <nav className= "Navbar p-6">
          <div className="container bg-transparent mx-auto flex flex-row content-around justify-around items-center">
            {/* logo */}
            <div className="flex items-center text-5xl space-x-3">
                        <img src="../src/assets/Group 72.png" className="w-15 h-15 " />
            </div>
            {/* Navigation Links */}
            <div className="Navlinks hidden md:flex font-bold text-lg">
              <NavLink to="/" className="p-5 hover:text-gray-300">Overview</NavLink>
              <NavLink to="/" className="p-5 hover:text-gray-300">Text</NavLink>
              <NavLink to="/" className="p-5 hover:text-gray-300">Pictures</NavLink>
              <NavLink to="/" className="p-5 hover:text-gray-300">Documents</NavLink>           
            </div>
            {/* Responsive Toggle Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>

            {/* Responsive Navigation Links */}
            {navbarOpen && (
              <div className="md:hidden flex flex-col mt-4 space-y-4 bg-gray-700">
              <NavLink to="/" className="p-5 hover:text-gray-300">Overview</NavLink>
              <NavLink to="/" className="p-5 hover:text-gray-300">Text</NavLink>
              <NavLink to="/" className="p-5 hover:text-gray-300">Pictures</NavLink>
              <NavLink to="/" className="p-5 hover:text-gray-300">Documents</NavLink>
              </div>
            )}

            <div className="flex items-center space-x-4 ml-auto">
                <div className="flex flex-row text-white">
                    <FontAwesomeIcon icon={faBell}/>
                    <br />
                    <FontAwesomeIcon icon={faGear} />
                </div>
            <div className="flex items-center">
                <img
                src="/path/to/person.jpg"
                alt="Person"
                className="h-8 w-8 rounded-full object-cover"
                />
                </div>
            </div>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<LLMHome/>} />    
      </Routes>
    </>
  );
};

export default  LLMNav;
