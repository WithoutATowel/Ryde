import React from 'react';
import { Link } from 'react-router-dom';

const NavLoggedOut = props => (
  <div className='nav-link-div'>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/discover'>Discover</Link></li>
    <li><Link to='/ourteam'>OurTeam</Link></li>
    <li><a href='#login-modal' className="modal-trigger ">Login</a></li>
    <li><a href='#signup-modal' className="modal-trigger ">Sign Up</a></li>
  </div>
)

export default NavLoggedOut;
