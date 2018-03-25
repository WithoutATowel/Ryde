import React from 'react';
import '../css/publicprofile.css';
import { ProfileDetails } from '../components/ProfileDetails';
// import axios from 'axios';

export const PublicProfile = props => {
  if (props.clickedUser) {
    return (
      <div className='public-profile-page'>
        <div className='row'>
          <div className='col s12 center-align'>
            <div className='profile-backing-off-white center-align'></div>
            <div className='pic-circle'>
              <img src='https://www.placecage.com/c/185/230' alt='profile' />
            </div>
            <br />
            <h4>{props.clickedUser.name}</h4>
          </div>
        </div>
        <div className='row center-align'>
          <div className='col s10 offset-s1'>
            <ProfileDetails />
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

export default PublicProfile;
