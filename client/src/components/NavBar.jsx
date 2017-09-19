import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  
  <div className="navbar">
  
    <Link to={'/'}>Home</Link>
    <Link to={'/juniors'}>Juniors</Link>
    <Link to={'/seniors'}>Seniors</Link>
    
    {/* <span>Juniors</span>
    <span>Seniors</span> */}
  </div>
  
)

export default Navbar;