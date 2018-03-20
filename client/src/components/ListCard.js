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

  // handleExpansionToggle = () => {
  //   this.setState({
  //     expanded: !this.state.expanded
  //   })
  // }

  handleExpansionToggle(e) {
    // Expand section
    let newHeight = this.refs.details.style.maxHeight === '600px' ? '0px' : '600px';
    this.refs.details.style.maxHeight = newHeight;
    // Rotate arrow
    let newRotation = e.target.style.transform === 'rotate(180deg)' ? '0deg' : '180deg';
    console.log(e.target.style.transform);
    e.target.style.transform = 'rotate(' + newRotation + ')';
  }

  render() {
    let ryde = this.props.ryde;
    let details;
    let pets = ryde.pets ? 'checked' : null;
    // if(this.state.expanded) {
    //   details = (
    //     <div>
    //       <input type='checkbox' checked={ryde.pets ? 'checked' : null} disabled />
    //       <label>Pets: </label>
    //       <input type='checkbox' checked={ryde.pets ? 'checked' : null} disabled />
    //       <label>Smoking</label>
    //       <Ryders />
    //     </div>
    //   )
    // }

    //{ryde.driver.name}, {ryde.driver.averageDriverRating} not available yet

    return (
      <div className='list-card-div'>
        <div className='row'>
          <h3 className='list-card-h3 col s6'>{ryde.rydeName}</h3>
          <h4 className='col s6'>Cost: {ryde.cost}</h4>
        </div>
        <h5>Departure: {ryde.departDate},{ryde.departTime}</h5>
        <div className='row'>
          <h5 className='col s6'>Driver name: Bernie Sanders</h5>
          <h5 className='col s6'>Rating: 4.8 / 5</h5>
        </div>
        <div className='list-card-details' ref='details'>
          <input type='checkbox' checked={ryde.pets ? 'checked' : null} disabled />
          <label>Pets: </label>
          <input type='checkbox' checked={ryde.pets ? 'checked' : null} disabled />
          <label>Smoking</label>
          <Ryders />
        </div>
        <button className='list-card-expand-button' onClick={ (e) => this.handleExpansionToggle(e) }></button>
        <br />
      </div>
    )
  }
}

export default ListCard;
