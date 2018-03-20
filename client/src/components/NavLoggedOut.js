import React from 'react';
import { Link } from 'react-router-dom';

const NavLoggedOut = props => (
  <div>

    {/* <li><Link to={'/profile/' + this.props.user._id}>Scott public test</Link></li>
    <li><Link to='/publicprofile'>Sean public test</Link></li>
    <li><Link to='/publicprofile'>Brant public test</Link></li>
    <li><Link to='/publicprofile'>Brett public test</Link></li> */}

    <li><Link to='/'>Home</Link></li>
    <li><Link to='/discover'>Discover</Link></li>
    <li><Link to='/ourteam'>OurTeam</Link></li>
    <li><Link to='/login'>Log In</Link></li>  {/* placeholder so we can easily get to page */}
    <li><Link to='/signup'>Sign Up</Link></li>  {/* placeholder so we can easily get to page */}
  </div>
)

export default NavLoggedOut;
