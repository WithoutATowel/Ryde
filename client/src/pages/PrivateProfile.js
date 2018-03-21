import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/userprofile.css';
import MyRydes from './MyRydes.js'

class PrivateProfile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.user) {
      return (
        <div>
          <h1 className='user-profile-h1'>{this.props.user.name}'s Profile Page</h1>
          <div className='row'>
            <div className='col s12 center-align'>
              {/* <div className='profile-backing-off-white center-align'></div> */}
              <div className='pic-circle'>
                <img src='https://www.placecage.com/c/185/230' alt='profile' />
              </div>
              <br />
              <h5>{this.props.user.name}</h5>
              <p>do we want gender here???</p>
              <p><Link to='/postaryde'>Post a Ryde</Link></p>

              <Link to='/myrydes'>My Rydes</Link>
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
