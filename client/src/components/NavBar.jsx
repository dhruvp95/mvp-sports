import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ juniors }) => (
  
  <div className="navbar">
    <ul>
      <li>
        <NavLink exact to={'/'} activeClassName="active">Home</NavLink>
      </li>
      <li>
        <NavLink to={'/juniors'} activeClassName="active">Juniors</NavLink>
      </li>
      <li>
        <NavLink to={'/seniors'} activeClassName="active">Seniors</NavLink>
      </li>
    </ul>
  </div>
  
)

export default Navbar;