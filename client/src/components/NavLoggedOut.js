import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLoggedOut = props => (
  <div className='nav-link-div'>
    <li><NavLink exact to='/'>Home</NavLink></li>
    <li><NavLink to='/discover'>Discover</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><a href='#login-modal' className="modal-trigger ">Login</a></li>
    <li><a href='#signup-modal' className="modal-trigger ">Sign Up</a></li>
  </div>
)

export default NavLoggedOut;
