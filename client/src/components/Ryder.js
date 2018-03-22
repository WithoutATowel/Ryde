import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class Ryder extends Component {
  // constructor(props) {
  //   super(props)
  // }

  handleApprove() {
    console.log('User approved!');
    axios.post('/mydryves', {
      userId: this.props.ryder,
      tripId: this.props.ryde._id,
      action: 'approve'
    });
  }

  handleReject() {
    console.log('User has been rejected. Harsh.');
    axios.post('/mydryves', {
      userId: this.props.ryder,
      tripId: this.props.ryde._id,
      action: 'reject'
    });
  }

  render() {
    let buttons;
    if (this.props.status === 'pending') {
      buttons = (
        <span>

          <button onClick={() => this.handleApprove()}>Approve</button>
          <button onClick={() => this.handleReject()}>Reject</button>
        </span>
      );
    } else if (this.props.status === 'confirmed') {
      buttons = (
        <button onClick={this.handleReject}>Reject</button>
      );
    }
    let profileLink = '/profile/' + this.props.ryder._id

    const starRating = this.props.ryder.ryderRatings.reduce((a,b) => a + b, 0) / this.props.ryder.ryderRatings.length
    return (
      <div>
        <div className="row">
          <div className="col s12 m7">
            <Link to={profileLink}>
              <img src='https://www.placecage.com/c/185/230' alt='dryver' />
              <p>User: {this.props.ryder.name}</p>
            </Link>
            <div>
              <span>Rating<i class="material-icons">star</i> {starRating}</span>
            </div>

          </div>
          <div className="col s12 m5">
            {buttons}
          </div>
        </div>

      </div>
    )
  }
}

export default Ryder;
