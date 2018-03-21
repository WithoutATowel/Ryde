import React, { Component } from 'react';
import '../css/ryders.css';
import Ryder from './Ryder';

class Ryders extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    let ryde = this.props.ryde;
    let pendingRiders = ryde.pendingRiders.map( (rider, index) => {
      return <Ryder status='pending' ryde={this.props.ryde} ryder={rider} key={index} />
    }); 
    let confirmedRiders = ryde.ridersId.map( (rider, index) => {
      return <Ryder status='confirmed' ryde={this.props.ryde} ryder={rider} key={index} />
    });
    return (
      <div className='ryder-div'>
        <h4 className='ryders-h4'>Ryders</h4>
        <p>Pending</p>
        {pendingRiders}
        <p>Confirmed</p>
        {confirmedRiders}
      </div>
    )
  }
}

export default Ryders;
