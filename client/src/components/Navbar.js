import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import Home from './Home';
import Discover from './Discover';
import { UserProfile } from './UserProfile';
import PublicProfile from './PublicProfile';
import Login from './Login';
import Signup from './Signup';
import { OurTeam } from './OurTeam';

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>~~~~~~~~~~~NAV PLACEHOLDER section~~~~~~~~~~~~~~</h1>
        <ul className='nav-ul'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/discover'>Discover</Link></li>
          <li><Link to='/profile'>User Profile</Link></li>  {/* placeholder so we can easily get to page */}
          <li><Link to='/publicprofile'>Public Profile</Link></li>  {/* placeholder so we can easily get to page */}
          <li><Link to='/login'>Log In</Link></li>  {/* placeholder so we can easily get to page */}
          <li><Link to='/signup'>Sign Up</Link></li>  {/* placeholder so we can easily get to page */}
          <li><Link to='/ourteam'>OurTeam</Link></li>
          <li><Link to='/'>Logout</Link></li>
        </ul>
      </div>
    )
  }
}

export default Nav;
