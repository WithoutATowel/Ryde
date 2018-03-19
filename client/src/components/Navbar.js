import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Discover from './Discover';
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
          <li><Link to='/Discover'>Discover</Link></li>
          <li><Link to='/ourteam'>OurTeam</Link></li>
          <li><Link to='/'>Logout</Link></li>
        </ul>
      </div>
    )
  }
}

export default Nav;
