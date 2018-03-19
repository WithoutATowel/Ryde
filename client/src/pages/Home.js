import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniSearch from '../components/MiniSearch';
import '../css/home.css';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1 className='home-h1'>~~~~~~~~~~HOME PLACEHOLDER PAGE~~~~~~~~~~~~</h1>
        <MiniSearch />
        <h4>Links to user profiles PLACEHOLDER</h4>
        <ul>
          <li><Link to='/publicprofile'>Home</Link></li>
          <li><Link to='/publicprofile'>Scott</Link></li>
          <li><Link to='/publicprofile'>Sean</Link></li>
          <li><Link to='/publicprofile'>Brant</Link></li>
          <li><Link to='/publicprofile'>Brett</Link></li>
        </ul>
      </div>

    )
  }
}

export default Home;
