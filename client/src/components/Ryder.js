import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleRydesTab } from '../redux/actions/index';
import { Link } from 'react-router-dom';
import axios from 'axios';

const mapDispatchToProps = dispatch => {
  return {
    toggleRydesTab: data => dispatch(toggleRydesTab(data)),
  }
}

const mapStateToProps = state => {
  return {
    rydesTabIsToggled: state.rydesTabIsToggled,
    user: state.user
  }
}

class ConnectedRyder extends Component {

  handleApprove() {
    //console.log('User approved!');
    axios.post('/mydryves', {
      userId: this.props.ryder._id,
      tripId: this.props.ryde._id,
      action: 'approve'
    }).then(() => {
      // Query for user's rydes or dryves as needed, where results are stored by server in Redux under 'myRydesDryves'
      axios.get('/mydryves/' + this.props.user._id)
        .then( result => {
          //console.log('This result: ', result.data)
          // Flip the rydesTabIsToggled state value in Redux AND lift the results to myRydesDryves in Redux
          if (result.data && result.data.length > 0) {
            this.props.toggleRydesTab({
              rydesTabIsToggled: false,
              myRydesDryves: result.data
            });
          } else {
            this.props.toggleRydesTab({
              rydesTabIsToggled: false,
              myRydesDryves: []
            });
          }
          this.props.onRejectApprove()
        });
    });

  }

  handleReject() {
    //console.log('User has been rejected. Harsh.');
    axios.post('/mydryves', {
      userId: this.props.ryder._id,
      tripId: this.props.ryde._id,
      action: 'reject'
    }).then(() => {
      // Query for user's rydes or dryves as needed, where results are stored by server in Redux under 'myRydesDryves'
      axios.get('/mydryves/' + this.props.user._id)
        .then( result => {
          // Flip the rydesTabIsToggled state value in Redux AND lift the results to myRydesDryves in Redux
          if (result.data && result.data.length > 0) {
            this.props.toggleRydesTab({
              rydesTabIsToggled: false,
              myRydesDryves: result.data
            });
          } else {
            this.props.toggleRydesTab({
              rydesTabIsToggled: false,
              myRydesDryves: []
            });
          }
          this.props.onRejectApprove()
        });
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
                <div dangerouslySetInnerHTML={{__html: this.props.ryder.image}} />
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
const Ryder = connect(mapStateToProps, mapDispatchToProps)(ConnectedRyder)
export default Ryder;
