import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../redux/store/index';
import { toggleRydesTab } from '../redux/actions/index';

const mapDispatchToProps = dispatch => {
  return {
    toggleRydesTab: bool => dispatch(toggleRydesTab(bool))
  }
}

let rydesTabIsToggled = store.getState().rydesTabIsToggled;

class ConnectedMyRydes extends Component {
  constructor(props) {
    super(props)
  }

  handleTabToggle = (event) => {
    this.props.toggleRydesTab(!rydesTabIsToggled);
    rydesTabIsToggled = store.getState().rydesTabIsToggled;
    console.log('Post-toggle: ' + store.getState().rydesTabIsToggled);
  }



  render() {
    return (
      <div>
        <h1>~~~~~~~~~~MyRydes PLACEHOLDER PAGE~~~~~~~~~~~~</h1>
        <h2>Testing: {rydesTabIsToggled.toString()}</h2>
        <button onClick={this.handleTabToggle}>Toggle</button>
      </div>

    )
  }
}

const MyRydes = connect(null, mapDispatchToProps)(ConnectedMyRydes);

export default MyRydes;
