import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../redux/store/index';
import { toggleRydesTab, liftBigSearch } from '../redux/actions/index';
import ListBox from '../components/ListBox';
import axios from 'axios';

const mapDispatchToProps = dispatch => {
  return {
    toggleRydesTab: bool => dispatch(toggleRydesTab(bool)),
    liftBigSearch: data => dispatch(liftBigSearch(data))
  }
}

const mapStateToProps = state => {
  return { 
    rydesTabIsToggled: state.rydesTabIsToggled, 
    user: state.user
  }
}

class ConnectedMyRydes extends Component {
  constructor(props) {
    super(props)
  }

  willThisWork() { 
    console.log('HUZZAH');
  }

  handleTabToggle = (event) => {
    // If Rydes tab currently selected, query against the '/mydryves' route and vice versa
    let route = this.props.rydesTabIsToggled ? '/mydryves' : '/myrydes';
    // TODO: Add code to query for user's rydes and store in 'searchResults'
    axios.post(route, { userId: this.props.user._id })
      .then( result => {
        if (result.data && result.data.length > 0) {
          this.props.liftBigSearch(result.data);
        } else {
          this.props.liftBigSearch([]);
        }
        // Update rydesTabIsToggled state value in Redux
        this.props.toggleRydesTab(!this.props.rydesTabIsToggled);
      });
  }

  componentDidMount() {
    axios.post('/myrydes', { userId: this.props.user._id })
      .then( result => {
        if (result.data && result.data.length > 0) {
          this.props.liftBigSearch(result.data);
        } else {
          this.props.liftBigSearch([]);
        }
      });
  }

  render() {
    console.log(this.props.rydesTabIsToggled);
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
