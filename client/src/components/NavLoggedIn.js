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
  // constructor(props) {
  //   super(props)
  // }

  handleClick() {
    this.props.logout()
    localStorage.removeItem('rydeAppToken');
  }

  render() {
    return (
      <div>

        <li><Link to='/profile/5ab050cb20b8b12fdff5b67d'>ScottPT</Link></li>
        <li><Link to='/profile/5ab050cb20b8b12fdff5b679'>SeanPT</Link></li>
        <li><Link to='/profile/5ab050cb20b8b12fdff5b67c'>BrantPT</Link></li>
        <li><Link to='/profile/5ab050cb20b8b12fdff5b67b'>BrettPT</Link></li>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/discover'>Discover</Link></li>
        <li><Link to='/myrydes'>My Rydes</Link></li>
        <li><Link to={'/profile/' + this.props.user._id}>{this.props.user.name}'s Profile</Link></li>
        <li><Link to='/ourteam'>OurTeam</Link></li>
        <li><Link to='/' onClick={() => this.handleClick()}>Logout</Link></li>
      </div>
    )
  }
}

const NavLoggedIn = connect(mapStateToProps, mapDispatchToProps)(ConnectedNavLoggedIn);

export default NavLoggedIn;
