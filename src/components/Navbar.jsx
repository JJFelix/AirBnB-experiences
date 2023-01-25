import React from 'react';
import airbnbLogo from '/assets/airbnb-logo.png';
import '../style.css';

function Navbar() {
  return (
    <nav className='navbar'>
        <img src={airbnbLogo} alt="airbnb logo" />
    </nav>
  )
}

export default Navbar;