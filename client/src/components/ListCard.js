import React, { Component } from 'react';
import '../css/listcard.css';
import Ryders from './Ryders';

class ListCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
    }
  }

  handleExpansionToggle = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    let details
    if(this.state.expanded) {
      details = (
        <div>
          <input type='checkbox' checked disabled />
          <label>Pets</label>
          <input type='checkbox' disabled />
          <label>Smoking</label>
          <h5>Comments</h5>
          <p>This is a comment</p>
        </div>
      )
    }


    return (
      <div className='list-card-div'>
        <div className='row'>
          <h3 className='list-card-h3 col s6'>Ryde to Canada</h3>
          <h4 className='col s6'>Cost: $13</h4>
        </div>
        <h5>Departure: April 11, 8:00am</h5>
        <div className='row'>
          <h5 className='col s6'>Driver name: Jon Doe</h5>
          <h5 className='col s6'>Rating: 4/5</h5>
        </div>
        {details}
        <button onClick={this.handleExpansionToggle}>Expand</button>
        <Ryders />
        <br />
      </div>
    )
  }
}

export default ListCard;
