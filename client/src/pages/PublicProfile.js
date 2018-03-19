import React, { Component } from 'react';
import '../css/publicprofile.css';
import ProfileDetails from '../components/ProfileDetails';

class PublicProfile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='public-profile-page'>
        <div className='row'>
          <div className='col s12 center-align'>
            <h1 className='public-h1'>~~~~~Working on pub profile~~~~</h1>
            <div className='pic-circle'>
              <img src='https://www.placecage.com/c/185/230' />
            </div>
            <br />
            <h5>~~~~~~USER NAME PLACHOLDER text~~~~~~~~~</h5>
            <p>do we want gender here???</p>
          </div>
        </div>
        <div className='row center-align'>
          <div className='col s10 offset-s1'>
            <ProfileDetails />
          </div>
        </div>
      </div>
    )
  }
}

export default PublicProfile;
