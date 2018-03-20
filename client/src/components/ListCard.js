import React, { Component } from 'react';
import '../css/listcard.css';
import axios from 'axios';

class ListCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
    }
  }

  handleExpansionToggle(e) {
    // Expand section
    let newHeight = this.refs.details.style.maxHeight === '600px' ? '0px' : '600px';
    this.refs.details.style.maxHeight = newHeight;
    // Rotate arrow
    let newRotation = e.target.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    e.target.style.transform = newRotation;
  }

  handleRydeAdd(e) {
    let newRotation = e.target.style.transform === 'rotate(45deg)' ? 'rotate(0deg)' : 'rotate(45deg)';
    e.target.style.transform = newRotation;
    // Post addition to the database
    axios.post('/myrydes', { userId: this.props.user._id, tripId: this.props.ryde._id })
  }

  render() {
    // console.log(this.props.ryde);
    let ryde = this.props.ryde;
    let recurringDays, recurringColon
    if (ryde.reoccurring) {
      recurringColon = ': ';
      recurringDays = (
        <span className='list-card-recurring-days'>
          <input type='checkbox' checked={ryde.reocurringDays.includes('sunday') ? 'checked' : null} disabled />
          <label>Sunday</label>
          <input type='checkbox' checked={ryde.reocurringDays.includes('monday') ? 'checked' : null} disabled />
          <label>Monday</label>
          <input type='checkbox' checked={ryde.reocurringDays.includes('tuesday') ? 'checked' : null} disabled />
          <label>Tuesday</label>
          <input type='checkbox' checked={ryde.reocurringDays.includes('wednesday') ? 'checked' : null} disabled />
          <label>Wednesday</label>
          <input type='checkbox' checked={ryde.reocurringDays.includes('thursday') ? 'checked' : null} disabled />
          <label>Thursday</label>
          <input type='checkbox' checked={ryde.reocurringDays.includes('friday') ? 'checked' : null} disabled />
          <label>Friday</label>
          <input type='checkbox' checked={ryde.reocurringDays.includes('saturday') ? 'checked' : null} disabled />
          <label>Saturday</label>
        </span>
      )
    }

    //{ryde.driver.name}, {ryde.driver.averageDriverRating} not available yet
    return (
      <div className='list-card-div'>
        <div className='row list-card-header'>
          <h4 className='list-card-h3 col s6'>{ryde.rydeName}</h4>
          <h4 className='col s6 right-align'>${ryde.cost}</h4>
        </div>
        <div className='row list-card-main'>
          <div className='col s5 list-card-driver'>
            <div className='list-card-driver-pic'>
              <img src='https://www.placecage.com/c/185/230' alt='dryver' />
            </div>
            <div className='list-card-driver-details'>
              <li>Bernie Sanders</li>
              <li>4.8 / 5</li>
            </div>
          </div>
          <div className='col s5 list-card-summary'>
            <table>
              <tbody>
                <tr><td className='right-align'><span className='bold'>From</span>:</td><td>{ryde.startAddress.street + ', ' + ryde.startAddress.city + ', ' + ryde.startAddress.state}</td></tr>
                <tr><td className='right-align'><span className='bold'>To</span>:</td><td>{ryde.endAddress.street + ', ' + ryde.endAddress.city + ', ' + ryde.endAddress.state}</td></tr>
                <tr><td className='right-align'><span className='bold'>Date</span>:</td><td>{ryde.departDate}</td></tr>
                <tr><td className='right-align'><span className='bold'>Time</span>:</td><td>{ryde.departTime}</td></tr>
              </tbody>
            </table>
          </div>
          <div className='col s2 list-card-add right-align' onClick={ (e) => this.handleRydeAdd(e) }>
            <i className='material-icons large'>add</i>
          </div>
        </div>
        <div className='list-card-details' ref='details'>
          <div className='row'>
            <div className='col s12'>
              <p>Open Seats: 4</p>
              <input type='checkbox' checked={ryde.pets ? 'checked' : null} disabled />
              <label>Pets</label>
              <br />
              <input type='checkbox' checked={ryde.smoking ? 'checked' : null} disabled />
              <label>Smoking</label>
              <br />
              <input type='checkbox' checked={ryde.reoccurring ? 'checked' : null} disabled />
              <label>Recurring{recurringColon}</label>
              {recurringDays}
            </div>
          </div>
          
        </div>
        <button className='list-card-expand-button' onClick={ (e) => this.handleExpansionToggle(e) }></button>
      </div>
    )
  }
}

export default ListCard;
