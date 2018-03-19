import React from 'react';
import { Link } from 'react-router-dom';

const NavLoggedIn = props => (
  <div>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/discover'>Discover</Link></li>
    <li><Link to='/myrydes'>My Rydes</Link></li>
    <li><Link to='/profile'>User Profile</Link></li>  {/* placeholder so we can easily get to page */}
    <li><Link to='/publicprofile'>Public Profile</Link></li>  {/* placeholder so we can easily get to page */}
    <li><Link to='/ourteam'>OurTeam</Link></li>
    <li><Link to='/' onClick={() => this.handleClick()}>Logout</Link></li>
  </div>
)

export default NavLoggedIn;
