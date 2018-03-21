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
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    this.props.liftCurrentPageToState('/')
  }

  render() {
    return (
      <div>
        <img src="/img/home-hero.jpg" className="home-hero" alt="traffic-hero" />
        <MiniSearch />
      </div>

    )
  }
}

const Home = connect(null, mapDispatchToProps)(ConnectedHome);

export default Home;
