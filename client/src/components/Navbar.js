import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Discover from './Discover';
import { UserProfile } from './UserProfile';
import PublicProfile from './PublicProfile';
import { OurTeam } from './OurTeam';
import Login from './Login';
import Signup from './Signup';

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>~~~~~~~~~~~NAV PLACEHOLDER section~~~~~~~~~~~~~~</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/discover'>Discover</Link></li>
          <li><Link to='/profile'>User Profile</Link></li>  {/* placeholder so we can easily get to page */}
          <li><Link to='/publicprofile'>Public Profile</Link></li>  {/* placeholder so we can easily get to page */}
          <li><Link to='/ourteam'>OurTeam</Link></li>
          <li><Link to='/'>Logout</Link></li>
        </ul>
      </div>
    )
  }
}

export default Nav;
