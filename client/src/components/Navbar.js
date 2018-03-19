import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import Home from '../pages/Home';
import Discover from '../pages/Discover';
import { UserProfile } from '../pages/UserProfile';
import PublicProfile from '../pages/PublicProfile';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { OurTeam } from '../pages/OurTeam';

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ul className='nav-ul'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/discover'>Discover</Link></li>
          <li><Link to='/myrydes'>My Rydes</Link></li>
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
