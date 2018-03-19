import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../redux/store/index';
import '../css/discover.css';
import ListBox from '../components/ListBox';

class Discover extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='discover-div'>
        <h1 className='discover-h1'>~~~~~~~~~~~~DISCOVER PLACEHOLDER PAGE~~~~~~~~~~~~~~</h1>
        <ListBox />
        <br />
      </div>
    )
  }
}

export default Discover;
