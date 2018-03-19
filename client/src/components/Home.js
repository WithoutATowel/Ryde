import React, { Component } from 'react';
import MiniSearch from './MiniSearch';
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
      </div>

    )
  }
}

export default Home;
