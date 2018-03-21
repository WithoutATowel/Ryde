import React, { Component } from 'react';
import axios from 'axios';

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
    return (
      <div>
        <span>User: {this.props.ryder}</span>
        {buttons}
      </div>
    )
  }
}

export default Ryder;
