import React, { Component } from 'react';
import '../css/discover.css';
import ListBox from '../components/ListBox';
import BigSearch from '../components/BigSearch';

class Discover extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className='discover-div'>
        <div className='row'>
          <ul id="discover-slide-out" className="side-nav fixed hide-on-large-only">
            <BigSearch />
          </ul>
          <div className="discover-nav-btn-cont">
            <a href="#" data-activates="discover-slide-out" className="discover-sidnav hide-on-large-only">
              <i className="material-icons">filter_list</i>
              Filter Results
            </a>
          </div>
          <div className='col s12 l3 hide-on-med-and-down discover-side-column'>
            <h2 className='discover-h1'>Find a Ryde</h2>
            <BigSearch />
          </div>
          <div className='list-box-div col s12 m12 l9'>
            <h2>Search Results</h2>
            <ListBox />
          </div>
        </div>
        <br />
      </div>
    )
  }
}

export default Discover;
