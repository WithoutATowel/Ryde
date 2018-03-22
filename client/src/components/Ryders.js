import React, { Component } from 'react';
import '../css/ryders.css';
import Ryder from './Ryder';
import axios from 'axios';

class Ryders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pendingUsers: [],
      confirmedUsers: []
    }
  }

  componentDidMount() {
    axios.post('/ryders/pending',  {
          pending: this.props.ryde.pendingRiders
      }).then( result => {
      if (result.data && result.data.length > 0) {
        this.setState({
          pendingUsers: result.data
        })
      } else {
        console.log('failed ', result)
      }
    });

    axios.post('/ryders/confirmed',  {
          confirmed: this.props.ryde.ridersId
      }).then( result => {
      if (result.data && result.data.length > 0) {
        this.setState({
          confirmedUsers: result.data
        })
      } else {
        console.log('failed ', result)
      }
    });
  }

  render() {
    let ryde = this.props.ryde;
    let pendingRiders = this.state.pendingUsers.map( (rider, index) => {
      return <Ryder status='pending' ryde={this.props.ryde} ryder={rider} key={index} />
    });
    let confirmedRiders = this.state.confirmedUsers.map( (rider, index) => {
      return <Ryder status='confirmed' ryde={this.props.ryde} ryder={rider} key={index} />
    });

    return (
      <div className='ryder-div'>
        <h4 className='ryders-h4'>Ryders</h4>
        <div className="row">
          <div className="col s12 m6">
            <div className="pending-users">
              <p>Pending</p>
              {pendingRiders}
            </div>
          </div>
          <div className="col s12 m6">
            <div className="confirmed-users">
              <p>Confirmed</p>
              {confirmedRiders}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Ryders;
