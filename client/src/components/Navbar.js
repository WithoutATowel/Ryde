import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../redux/store/index';
import { logout } from '../redux/actions/index';
import '../css/navbar.css';
import Home from '../pages/Home';
import Discover from '../pages/Discover';
import { UserProfile } from '../pages/UserProfile';
import PublicProfile from '../pages/PublicProfile';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { OurTeam } from '../pages/OurTeam';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

const mapStateToProps = state => {
  return { user: state.user };
}

class ConnectedNav extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.logout()
    localStorage.removeItem('rydeAppToken');
  }

  render() {
<<<<<<< HEAD
    return (
      <div>
        <ul className='nav-ul'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/discover'>Discover</Link></li>
          <li><Link to='/myrydes'>My Rydes</Link></li>
          <li><Link to='/profile'>User Profile</Link></li>  {/* placeholder so we can easily get to page */}
          <li><Link to='/publicprofile'>Public Profile</Link></li>  {/* placeholder so we can easily get to page */}
          <li><Link to='/login'>Log In</Link></li>  {/* placeholder so we can easily get to page */}
          <li><Link to='/signup'>Sign Up</Link></li>  {/* placeholder so we can easily get to page */}
          <li><Link to='/ourteam'>OurTeam</Link></li>
          <li><Link to='/'>Logout</Link></li>
        </ul>
      </div>
    )
=======
    let theUser = this.props.user //|| this.state.googleUser
    if (theUser) {
      return (
        <div>
          <h1>~~~~~~~~~~~NAV PLACEHOLDER section~~~~~~~~~~~~~~</h1>
          <ul className='nav-ul'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/discover'>Discover</Link></li>
            <li><Link to='/profile'>User Profile</Link></li>  {/* placeholder so we can easily get to page */}
            <li><Link to='/publicprofile'>Public Profile</Link></li>  {/* placeholder so we can easily get to page */}
            <li><Link to='/ourteam'>OurTeam</Link></li>
            <li><Link to='/' onClick={() => this.handleClick()}>Logout</Link></li>
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <h1>~~~~~~~~~~~NAV PLACEHOLDER section~~~~~~~~~~~~~~</h1>
          <ul className='nav-ul'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/discover'>Discover</Link></li>
            <li><Link to='/publicprofile'>Public Profile</Link></li>  {/* placeholder so we can easily get to page */}
            <li><Link to='/ourteam'>OurTeam</Link></li>
            <li><Link to='/login'>Log In</Link></li>  {/* placeholder so we can easily get to page */}
            <li><Link to='/signup'>Sign Up</Link></li>  {/* placeholder so we can easily get to page */}
          </ul>
        </div>
      )
    }
>>>>>>> 217cf4341de230fbcb12c56dd7ad45337fde08bc
  }
}

const Nav = connect(mapStateToProps, mapDispatchToProps)(ConnectedNav);

export default Nav;
