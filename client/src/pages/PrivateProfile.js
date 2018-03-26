import React, { Component } from 'react';
import '../css/userprofile.css';
import { Modal, Button} from 'react-materialize';
import { ToastContainer, toast } from 'react-toastify';
import UpdateProfile from '../components/UpdateProfile';
import BecomeADryver from '../components/BecomeADryver';
import NoLongerDryve from '../components/NoLongerDryve';
import DeleteUser from '../components/DeleteUser';
import { Redirect } from 'react-router-dom';

class PrivateProfile extends Component {
  constructor(props) {
    super(props)
    this.notifyUpdate = this.notifyUpdate.bind(this)
  }

  notifyUpdate = (msg) => toast.info(msg, {position: toast.POSITION.TOP_CENTER});

  render() {
    let user = this.props.user
    let ryderRating = user.ryderRatingAvg
    let dryverRating = user.dryverRatingAvg
    let dryverOptions = user.dryver ? <NoLongerDryve userId={user._id} notifyUpdate={this.notifyUpdate} /> : <BecomeADryver userId={user._id} notifyUpdate={this.notifyUpdate} />;
    let dryverSignupText = user.dryver ? 'Currently enrolled to dryve:' : 'Become a Dryver:';
    if (user) {
      return (
        <div id="private-profile" className="container">
          <Modal header='Update Profile' id="update-profile-modal" >
            <UpdateProfile userId={user._id} />
          </Modal>
          <h2 className='user-profile-h1'>{user.name}'s Profile</h2>
          <div className='row profile-card'>
            <div className='col m4'>
              <div className='pic-circle center-align'>
                <div dangerouslySetInnerHTML={{__html: user.image}} />
              </div>
            </div>
              <div className='profile-stats-column col m4'>
                <h4>Ryder Stats</h4>
                <ul>
                  <li><span className='bold'>Rating:</span> {ryderRating > 0 ? ryderRating : 'no ratings yet'}</li>
                  <li><span className='bold'>Total Trips:</span> {user.completedTrips.length > 0 ? user.completedTrips : 'no trips yet'}</li>
                </ul>
              </div>
              <div className='profile-stats-column col m4'>
                <h4>Dryver Stats</h4>
                <ul>
                  <li><span className='bold'>Dryver Rating:</span> {dryverRating > 0 ? dryverRating : 'no ratings yet'}</li>
                  <li><span className='bold'>Total Dryves:</span> {user.completedDryves.length > 0 ? user.completedDryves : 'no trips yet'}</li>
                </ul>
              </div>
          </div>
          <h3>Details</h3>
          <div className='row profile-card'>
            <UpdateProfile />
          </div>
          <h3>Dryver Settings</h3>
          <div className='row profile-card center'>
            <div>
              <h5>{dryverSignupText}</h5>
              {dryverOptions}
            </div>
          </div>
          <h3>User Settings</h3>
          <div className='row profile-card center'>
            <div>
              <h5>Delete Profile:</h5>
              <Modal trigger={<Button className='btn red darken-2'>Delete</Button>}>
              	<DeleteUser />
              </Modal>
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
