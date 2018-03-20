import React, { Component } from 'react';
import '../css/publicprofile.css';
import ProfileDetails from '../components/ProfileDetails';
import axios from 'axios';

class PublicProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  render() {
    if (this.props.user) {
      return (
        <div className='public-profile-page'>
          <div className='row'>
            <div className='col s12 center-align'>
              <div className='profile-backing-off-white center-align'></div>
              <div className='pic-circle'>
                <img src='https://www.placecage.com/c/185/230' alt='profile picture' />
              </div>
              <br />
              <h5>{this.props.user.name}</h5>
              <p>do we want gender here???</p>
            </div>
          </div>
          <div className='row center-align'>
            <div className='col s10 offset-s1'>
              <ProfileDetails user={this.props.user} />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <h4>Loading...</h4>  /////////// FIX THIS
      )
    }
  }
}

export default PublicProfile;
