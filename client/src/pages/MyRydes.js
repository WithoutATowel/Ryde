import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import store from '../redux/store/index';
import { toggleRydesTab, liftMyRydesDryves, liftTokenToState, logout } from '../redux/actions/index';
import ListBox from '../components/ListBox';
import axios from 'axios';

const mapDispatchToProps = dispatch => {
  return {
    toggleRydesTab: data => dispatch(toggleRydesTab(data)),
    liftMyRydesDryves: data => dispatch(liftMyRydesDryves(data)),
    liftTokenToState: data => dispatch(liftTokenToState(data)),
    logout: () => dispatch(logout())
  }
}

const mapStateToProps = state => {
  return {
    rydesTabIsToggled: state.rydesTabIsToggled,
    user: state.user
  }
}

class ConnectedMyRydes extends Component {

  handleTabToggle = (event) => {
    // If Rydes tab currently selected, query against the '/mydryves' route and vice versa
    let route = this.props.rydesTabIsToggled ? '/mydryves' : '/myrydes';
    // Query for user's rydes or dryves as needed, where results are stored by server in Redux under 'myRydesDryves'
    axios.get(route + '/' + this.props.user._id)
      .then( result => {
        // Flip the rydesTabIsToggled state value in Redux AND lift the results to myRydesDryves in Redux
        if (result.data && result.data.length > 0) {
          this.props.toggleRydesTab({
            rydesTabIsToggled: !this.props.rydesTabIsToggled,
            myRydesDryves: result.data
          });
        } else {
          this.props.toggleRydesTab({
            rydesTabIsToggled: !this.props.rydesTabIsToggled,
            myRydesDryves: []
          });
        }
      });
  }

  componentDidMount() {
    if (this.props.user) {
      let route = this.props.rydesTabIsToggled ? '/myrydes/' : '/mydryves/';
      axios.get(route + this.props.user._id)
      .then( result => {
        if (result.data && result.data.length > 0) {
          this.props.liftMyRydesDryves(result.data);
        } else {
          this.props.liftMyRydesDryves([]);
        }
      });
    } else {
      let token = localStorage.getItem('rydeAppToken')
      if (token === 'undefined' || token === 'null' || token === '' || token === undefined || token === null) {
        localStorage.removeItem('rydeAppToken')
        this.props.logout()
      } else {
        axios.post('/auth/me/from/token', {
          token
        }).then( result => {
          localStorage.setItem('rydeAppToken', result.data.token)
          this.props.liftTokenToState(result.data);
          let route = this.props.rydesTabIsToggled ? '/myrydes' : '/mydryves';
          axios.get(route + '/' + this.props.user._id)
            .then( result => {
              if (result.data && result.data.length > 0) {
                this.props.liftMyRydesDryves(result.data);
              } else {
                this.props.liftMyRydesDryves([]);
              }
            });
        }).catch( err => console.log(err))
      }
    }
  }

  render() {
    // if (!this.props.user) {
    //   return (<Redirect to='/login' />)
    // } else {
      return (
        <div>
          <div className="flexCol-vCenter-hCenter">
            <h1>My Rydes</h1>
            <div className="switcher">
              <input
                type="radio"
                name="balance"
                value="MyRydes"
                id="my-rydes-radio"
                className="switcher__input switcher__input--myRydes"
                onChange={this.handleTabToggle}
                defaultChecked={this.props.rydesTabIsToggled ? 'checked' : null} />
              <label htmlFor="my-rydes-radio" className="switcher__label">My Rydes</label>

              <input
                type="radio"
                name="balance"
                value="MyDrives"
                id="my-drives-radio"
                className="switcher__input switcher__input--myDrives"
                onChange={this.handleTabToggle}
                defaultChecked={!this.props.rydesTabIsToggled ? 'checked' : null} />
              <label htmlFor="my-drives-radio" className="switcher__label">My Drives</label>

              <span className="switcher__toggle"></span>
            </div>
          </div>
          <ListBox myRydesPage={true} />
        </div>
      )
    // }
  }
}

const MyRydes = connect(mapStateToProps, mapDispatchToProps)(ConnectedMyRydes);

export default MyRydes;
