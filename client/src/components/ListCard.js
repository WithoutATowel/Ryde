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
    let ryde = this.props.ryde;
    let details;
    let pets = ryde.pets ? 'checked' : null;
    if(this.state.expanded) {
      details = (
        <div>
          <input type='checkbox' checked={ryde.pets ? 'checked' : null} disabled />
          <label>Pets: </label>
          <input type='checkbox' checked={ryde.pets ? 'checked' : null} disabled />
          <label>Smoking</label>
          <Ryders />
        </div>
      )
    }


    return (
      <div className='list-card-div'>
        <div className='row'>
          <h3 className='list-card-h3 col s6'>{ryde.rydeName}</h3>
          <h4 className='col s6'>Cost: {ryde.cost}</h4>
        </div>
        <h5>Departure: {ryde.departDate},{ryde.departTime}</h5>
        <div className='row'>
          <h5 className='col s6'>Driver name: {ryde.driver.name}</h5>
          <h5 className='col s6'>Rating: {ryde.driver.averageDriverRating}</h5>
        </div>
        {details}
        <button onClick={this.handleExpansionToggle}>Expand</button>
        <br />
      </div>
    )
  }
}

export default ListCard;
