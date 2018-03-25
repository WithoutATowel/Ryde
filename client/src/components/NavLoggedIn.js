import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/index';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

const mapStateToProps = state => {
  return { user: state.user };
}

class ConnectedNavLoggedIn extends Component {

  handleClick() {
    localStorage.removeItem('rydeAppToken');
    this.props.logout()
  }

  render() {
    // Instead of doing this, have "Post a Ryde" link to the "sign up to be a driver" form?
    if (this.props.user.dryver) {
      return (
        <div className='nav-link-div'>
          <li><NavLink exact to='/'>Home</NavLink></li>
          <li><NavLink to='/discover'>Discover</NavLink></li>
          <li><NavLink to='/postaryde'>Post a Ryde</NavLink></li>
          <li><NavLink to='/myrydes'>My Rydes</NavLink></li>
          <li><NavLink to={'/profile/' + this.props.user._id}>{this.props.user.name.match(/\S+/)}'s Profile</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><Link to='/' onClick={() => this.handleClick()}>Logout</Link></li>
        </div>
      )
    } else {
      return (
        <div className='nav-link-div'>
          <li><NavLink exact to='/'>Home</NavLink></li>
          <li><NavLink to='/discover'>Discover</NavLink></li>
          <li><NavLink to='/myrydes'>My Rydes</NavLink></li>
          <li><NavLink to={'/profile/' + this.props.user._id}>{this.props.user.name.match(/\S+/)}'s Profile</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><Link to='/' onClick={() => this.handleClick()}>Logout</Link></li>
        </div>
      )
    }
  }
}

const NavLoggedIn = connect(mapStateToProps, mapDispatchToProps)(ConnectedNavLoggedIn);

export default NavLoggedIn;
