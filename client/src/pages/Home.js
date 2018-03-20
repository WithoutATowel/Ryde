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
        <img src="/img/home-hero.jpg" className="home-hero" alt="traffic-hero-image" />
        <MiniSearch />
        <h4>Links to user profiles PLACEHOLDER</h4>
        <ul>
          {/* <li><Link to={'/profile/' + this.props.user._id}>Scott public test</Link></li>
          <li><Link to='/publicprofile'>Sean public test</Link></li>
          <li><Link to='/publicprofile'>Brant public test</Link></li>
          <li><Link to='/publicprofile'>Brett public test</Link></li> */}
        </ul>
      </div>

    )
  }
}

export default Home;
