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
      <div className='nav-link-div'>

        <li><Link to='/profile/5ab36ae451987a5ee95bfe64'>ScottPT</Link></li>
        <li><Link to='/profile/5ab36ae451987a5ee95bfe60'>SeanPT</Link></li>
        <li><Link to='/profile/5ab36ae451987a5ee95bfe63'>BrantPT</Link></li>
        <li><Link to='/profile/5ab36ae451987a5ee95bfe62'>BrettPT</Link></li>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/discover'>Discover</Link></li>
        <li><Link to='/postaryde'>Post a Ryde</Link></li>
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
