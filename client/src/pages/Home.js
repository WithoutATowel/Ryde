import React, { Component } from 'react';
import { connect } from 'react-redux';
import { liftCurrentPageToState } from '../redux/actions/index';
import MiniSearch from '../components/MiniSearch';
import '../css/home.css';

const mapDispatchToProps = dispatch => {
  return {
    liftCurrentPageToState: page => dispatch(liftCurrentPageToState(page))
  }
}

class ConnectedHome extends Component {

  componentDidMount() {
    this.props.liftCurrentPageToState('/')

    var oldJs = document.getElementById('home-js');
    if (oldJs) {
      oldJs.parentElement.removeChild(oldJs);
    }

    const script = document.createElement("script");
    script.id = 'home-js';
    script.src = "/js/home.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <div id='home'>
          <div className='miniSearch'>
            <MiniSearch />
          </div>
        </div>
        <div id='home-blurb'>
          <h1>Welcome to Ryde</h1>
          <p>What if there was a better way to commute? A cheaper way to get away from the city? Now there is. 
             We're proud to introduce Ryde, a ride sharing tool that will revolutionize the way you get around. </p>
          <p>Driving somewhere? Pick someone up on the way and earn a few extra bucks. Or catch a ride to reduce your
             daily expenses and avoid the headache of battling traffic on your own. Together we can save money, reduce 
             carbon emmisions, and make traffic a little more bearable.</p>
        </div>
        
      </div>
    )
  }
}

const Home = connect(null, mapDispatchToProps)(ConnectedHome);

export default Home;
