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
    console.log('pending Riders: ',this.props.ryde._id, this.props.ryde.pendingRiders)
    axios.post('/ryders/pending',  {
          pending: this.props.ryde.pendingRiders
      }).then( result => {
      if (result.data && result.data.length > 0) {
        console.log('returned pending: ', result.data)
        this.setState({
          pendingUsers: result.data
        })
      } else {
        this.setState({pendingUsers: 'none'})
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
        this.setState({confirmedUsers: 'none'})
        console.log('failed ', result)
      }
    });
  }

  render() {
    let ryde = this.props.ryde;
    let pendingRiders
    if (this.state.pendingUsers === 'none') {
      pendingRiders = 'No Pending Ryders Found'
    } else {
      pendingRiders = this.state.pendingUsers.map( (rider, index) => {
        return <Ryder status='pending' ryde={ryde} ryder={rider} key={index} />
      })
    };
    let confirmedRiders
    if (this.state.confirmedUsers === 'none') {
      confirmedRiders = 'No Confirmed Ryders Found'
    } else {
      confirmedRiders = this.state.confirmedUsers.map( (rider, index) => {
        return <Ryder status='confirmed' ryde={ryde} ryder={rider} key={index} />
      })
    };

    return (
      <div className='ryder-div'>
        <div className="row">
          <div className="col s12 m6">
            <div className="pending-users">
              <h4>Pending Ryders</h4>
              {pendingRiders}
            </div>
          </div>
          <div className="col s12 m6">
            <div className="confirmed-users">
              <h4>Confirmed Ryders</h4>
              {confirmedRiders}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Ryders;
