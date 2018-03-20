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
      </div>

    )
  }
}

export default Home;
