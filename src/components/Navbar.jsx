import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './stylesheets/Navbar.css'

function Navbar() {

  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);


  return (
    <nav className={`nav-bar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className='navbar-container'>
        <Link to={"/"} className='logo'>DM</Link>
        <div className='links'>
          <Link to={"/about"} className='navbar-link'>About</Link>
          <Link to={"/projects"} className='navbar-link'>Projects</Link>
          <Link to={"/resume"} className='resume-button'>Resume</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar