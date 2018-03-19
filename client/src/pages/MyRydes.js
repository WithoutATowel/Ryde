import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../redux/store/index';
import { toggleRydesTab } from '../redux/actions/index';
import ListBox from '../components/ListBox';

const mapDispatchToProps = dispatch => {
  return {
    toggleRydesTab: bool => dispatch(toggleRydesTab(bool))
  }
}

const mapStateToProps = state => {
  return { rydesTabIsToggled: state.rydesTabIsToggled }
}

class ConnectedMyRydes extends Component {
  constructor(props) {
    super(props)
  }

  handleTabToggle = (event) => {
    this.props.toggleRydesTab(!this.props.rydesTabIsToggled);
    // TODO: add query here to get the user's rydes or dryves, depending on state of toggle
    // pass the trips into Redux state under the "searchResults" property
  }

  // TODO: add "componentDidMount" (or w/e) here and run a query for the user's rydes. Pass into Redux
  // state under the "searchResults" property

  render() {
    return (
      <div>
        <h1>My Rydes</h1>
        <button onClick={this.handleTabToggle}>Toggle</button>
        <ListBox />
      </div>

    )
  }
}

const MyRydes = connect(mapStateToProps, mapDispatchToProps)(ConnectedMyRydes);

export default MyRydes;
