import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Ryder extends Component {

  handleApprove() {
    console.log('User approved!');
    axios.post('/mydryves', {
      userId: this.props.ryder._id,
      tripId: this.props.ryde._id,
      action: 'approve'
    });
  }

  handleReject() {
    console.log('User has been rejected. Harsh.');
    axios.post('/mydryves', {
      userId: this.props.ryder._id,
      tripId: this.props.ryde._id,
      action: 'reject'
    });
  }

  render() {
    let buttons;
    if (this.props.status === 'pending') {
      buttons = (
        <span>
          <button onClick={() => this.handleApprove()} className="rydeGreenBtn btn colBtn">Approve</button>
          <button onClick={() => this.handleReject()} className="rydeBlueBtn btn colBtn">Reject</button>
        </span>
      );
    } else if (this.props.status === 'confirmed') {
      buttons = (
        <button onClick={() => this.handleReject()} className="rydeBlueBtn btn colBtn">Reject</button>
      );
    }
    let profileLink = '/profile/' + this.props.ryder._id
    //let profilePic = 'https://www.avatarapi.com/js.aspx?email=' + this.props.ryder.email + '&size=128'


    const starRating = this.props.ryder.ryderRatings.reduce((a,b) => a + b, 0) / this.props.ryder.ryderRatings.length
    return (
      <div className="z-depth-3 ryder-card-cont">
        <div className="row">
          <div className="col s12 m3">
            <Link to={profileLink}>
              <div className="ryder-profile-pic">
                <div dangerouslySetInnerHTML={{__html: this.state.profilePic}} />
              </div>
            </Link>
          </div>
          <div className="col s12 m5">
            <div>
              <Link to={profileLink}>
                <h5>{this.props.ryder.name}</h5>
              </Link>
              <span><i className="material-icons">star</i> {starRating}/5</span>
            </div>

          </div>
          <div className="col s12 m4">
            {buttons}
          </div>
        </div>

      </div>
    )
  }
}

export default Ryder;
