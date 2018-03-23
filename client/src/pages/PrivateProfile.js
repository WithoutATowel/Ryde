import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/userprofile.css';
import MyRydes from './MyRydes.js'
import BecomeADryver from '../components/BecomeADryver';

class PrivateProfile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let user = this.props.user
    let ryderRating = user.ryderRatingAvg
    let dryverRating = user.dryverRatingAvg
    let showBecomeDryver = user.dryver ? <BecomeADryver becomeDryverSubmit={this.handleBecomeDryverSubmit} /> : false;

    if (user) {
      return (
        <div>
          <h1 className='user-profile-h1'>{user.name}'s Profile Page</h1>
          <div className='row'>
            <div className='col s12 center-align'>
              {/* <div className='profile-backing-off-white center-align'></div> */}
              <div className='pic-circle'>
                <img src='https://www.placecage.com/c/185/230' alt='profile' />
              </div>
              <br />
              <h5>{user.name}</h5>
              <p>do we want gender here???</p>
              <ul>
                <li>IF NOT DRYVER, NEED LINK FOR DRYVER SIGNUP</li>
                <li>Ryder Rating: {ryderRating > 0 ? ryderRating : 'no ratings yet'}</li>
                <li>Total Rydes: {user.completedTrips.length > 0 ? user.completedTrips : 'no trips yet'}</li>
                <li>Dryver Rating: {dryverRating > 0 ? dryverRating : 'no ratings yet'}</li>
                <li>Total Dryves: {user.completedDryves.length > 0 ? user.completedDryves : 'no trips yet'}</li>
                <li>Car type: {user.car}</li>
                <li>change pic</li>
                <li>update profile</li>
                <li>become a dryver</li>
              </ul>
              <p>placeholder below</p>
              {showBecomeDryver}
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

export default PrivateProfile;
