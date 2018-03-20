import React, { Component } from 'react';
import MiniSearch from '../components/MiniSearch';
import '../css/home.css';

class Home extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        <img src="/img/home-hero.jpg" className="home-hero" alt="traffic-hero" />
        <MiniSearch />
      </div>

    )
  }
}

export default Home;
