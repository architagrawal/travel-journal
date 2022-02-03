import React from 'react';

const Navbar = () => {
  const globeImg = process.env.PUBLIC_URL + '/images/globe.png';
  return (
    <nav>
      <img src={globeImg} className='nav-img' />
      <p>My Travel Journal.</p>
    </nav>
  );
};

export default Navbar;
