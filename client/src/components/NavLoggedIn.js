import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../redux/store/index';
import { logout } from '../redux/actions/index';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

class ConnectedNavLoggedIn extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.logout()
    localStorage.removeItem('rydeAppToken');
  }

  render() {
    return (
      <div>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/discover'>Discover</Link></li>
        <li><Link to='/myrydes'>My Rydes</Link></li>
        <li><Link to='/profile'>User Profile</Link></li>  {/* placeholder so we can easily get to page */}
        <li><Link to='/publicprofile'>Public Profile</Link></li>  {/* placeholder so we can easily get to page */}
        <li><Link to='/ourteam'>OurTeam</Link></li>
        <li><Link to='/' onClick={() => this.handleClick()}>Logout</Link></li>
      </div>
    )
  }
}

const NavLoggedIn = connect(null, mapDispatchToProps)(ConnectedNavLoggedIn);

export default NavLoggedIn;
