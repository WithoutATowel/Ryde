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
import NavLoggedIn from './NavLoggedIn';
import NavLoggedOut from './NavLoggedOut';

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
    let theUser = this.props.user //|| this.state.googleUser
    if (theUser) {
      return (
        <div>
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper">
                <Link to='/'><img src="/img/logo-md-white.png" className="logo" alt="ryde-logo" /></Link>
                <ul class="right hide-on-med-and-down">
                  <NavLoggedIn />
                </ul>
                <a href="#" data-activates="slide-out" className="main-menu-button-collapse hide-on-large-only">
                  <i class="material-icons">menu</i>
                </a>
              </div>
            </nav>
          </div>

          <ul id="slide-out" className="side-nav">
            <NavLoggedIn />
          </ul>

        </div>
      )
    } else {
      return (
        <div>
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper">
                <Link to='/'><img src="/img/logo-md-white.png" className="logo" alt="ryde-logo" /></Link>
                <ul className="right hide-on-med-and-down">
                  <NavLoggedOut />
                </ul>
                <a href="#" data-activates="slide-out" className="main-menu-button-collapse hide-on-large-only">
                  <i className="material-icons">menu</i>
                </a>
              </div>
            </nav>
          </div>

          <ul id="slide-out" className="side-nav">
            <ul>
              <NavLoggedOut />
            </ul>
          </ul>

      </div>
      )
    }
  }
}

const Nav = connect(mapStateToProps, mapDispatchToProps)(ConnectedNav);

export default Nav;
