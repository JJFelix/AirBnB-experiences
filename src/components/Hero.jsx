import React from 'react';
import '../style.css';
import photoGrid from '/assets/photo-grid.png';


function Hero() {
  return (
    <div className='hero'>
        <img className='photo-grid' src={photoGrid}></img>
    </div>
  )
}

export default Hero;