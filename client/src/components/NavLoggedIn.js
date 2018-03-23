import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    this.props.logout()
    localStorage.removeItem('rydeAppToken');
  }

  render() {
    if (this.props.user.dryver) {
      return (
        <div className='nav-link-div'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/discover'>Discover</Link></li>
          <li><Link to='/postaryde'>Post a Ryde</Link></li>
          <li><Link to='/myrydes'>My Rydes</Link></li>
          <li><Link to={'/profile/' + this.props.user._id}>{this.props.user.name.match(/\S+/)}'s Profile</Link></li>
          <li><Link to='/ourteam'>About</Link></li>
          <li><Link to='/' onClick={() => this.handleClick()}>Logout</Link></li>
        </div>
      )
    } else {
      return (
        <div className='nav-link-div'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/discover'>Discover</Link></li>
          <li><Link to='/myrydes'>My Rydes</Link></li>
          <li><Link to={'/profile/' + this.props.user._id}>{this.props.user.name.match(/\S+/)}'s Profile</Link></li>
          <li><Link to='/ourteam'>About</Link></li>
          <li><Link to='/' onClick={() => this.handleClick()}>Logout</Link></li>
        </div>
      )
    }
  }
}

const NavLoggedIn = connect(mapStateToProps, mapDispatchToProps)(ConnectedNavLoggedIn);

export default NavLoggedIn;
