import React, { Component } from 'react';
import '../css/listcard.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Ryders from './Ryders';
import { liftMyRydesDryves, liftCurrentRyde } from '../redux/actions/index';

const mapDispatchToProps = dispatch => {
  return {
    liftMyRydesDryves: data => dispatch(liftMyRydesDryves(data)),
    liftCurrentRyde: data => dispatch(liftCurrentRyde(data))
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    rydesTabIsToggled: state.rydesTabIsToggled
  }
}

class ConnectedListCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      driver: '',
      driverRating: 4.5
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
      .then( (result) => {
        if (this.props.myRydesPage) {
          // If this handler gets called from the MyRydes page, we know the user is removing a trip.
          // Call axios for the user's new list of rydes and lift to state to trigger a re-render.
          // This causes a flicker. Just use refs to hide the listcard div instead?
          axios.get('/myrydes/' + this.props.user._id)
            .then( (result) => {
              if (result.data && result.data.length > 0) {
                this.props.liftMyRydesDryves(result.data);
              } else {
                this.props.liftMyRydesDryves([]);
              }
            });
        }
      });
  }

  componentDidMount() {
    if(this.props.user) {
      if(!this.props.dryvesTab && (this.props.ryde.ridersId.includes(this.props.user._id) || this.props.ryde.pendingRiders.includes(this.props.user._id))) {
        this.refs.addRemoveButton.style.transform = 'rotate(45deg)';
      }
    }
  }

  render() {
    let ryde = this.props.ryde;
    let reocurringDaysJSX, reocurringColon, actionButton, riders;
    let current = Date.now();
    let departDate = this.props.ryde.departDate
    // console.log(current, departDate);
    if (!this.props.user) {
      // If the user is not logged in, always show the plus sign, linking to login
      actionButton = (
        <div className='col s2 list-card-add right-align'>
          <Link to='/login'>
            <i className='material-icons large'>add</i>
          </Link>
        </div>
      )
    } else if (this.props.myRydesPage && !this.props.rydesTabIsToggled) {
      // The user is logged in, on the MyRydes page, toggled to Dryves
      console.log('Youre on the MyRydes page Dryves tab');
      // total hack otherwise edit/delete will be rotated for god knows why
      if (this.refs.addRemoveButton) {
        this.refs.addRemoveButton.style.transform = 'rotate(0deg)';
      }

      let completed = (current <= departDate ? (<button>Completed</button>):(<button>Delete</button>))
      actionButton = (
        <div>
          <Link to='/editaryde' onClick={ () => this.props.liftCurrentRyde(ryde._id) }><button>Edit</button></Link>
          {completed}
        </div>
      )

    } else {
      // The user is logged in, but isn't on the Dryves tab of the MyRydes page. Could be discover or My Rydes -> Rydes.
      actionButton = (
        <div className='col s2 list-card-add right-align' ref='addRemoveButton' onClick={ (e) => this.handleRydeAdd(e) }>
          <i className='material-icons large'>add</i>
        </div>
      )
    }

    //

    if (ryde.reoccurring) {
      reocurringColon = ': ';
      reocurringDaysJSX = (
        <span className='list-card-recurring-days'>
          <input type='checkbox' checked={ryde.reoccurringDays.includes('sunday') ? 'checked' : null} disabled />
          <label>Sunday</label>
          <input type='checkbox' checked={ryde.reoccurringDays.includes('monday') ? 'checked' : null} disabled />
          <label>Monday</label>
          <input type='checkbox' checked={ryde.reoccurringDays.includes('tuesday') ? 'checked' : null} disabled />
          <label>Tuesday</label>
          <input type='checkbox' checked={ryde.reoccurringDays.includes('wednesday') ? 'checked' : null} disabled />
          <label>Wednesday</label>
          <input type='checkbox' checked={ryde.reoccurringDays.includes('thursday') ? 'checked' : null} disabled />
          <label>Thursday</label>
          <input type='checkbox' checked={ryde.reoccurringDays.includes('friday') ? 'checked' : null} disabled />
          <label>Friday</label>
          <input type='checkbox' checked={ryde.reoccurringDays.includes('saturday') ? 'checked' : null} disabled />
          <label>Saturday</label>
        </span>
      )
    }

    if (this.props.myRydesPage && !this.props.rydesTabIsToggled) {
      riders = ( <Ryders ryde={this.props.ryde} /> );
    }

    let rawDate = new Date(ryde.departDate);
    let date = rawDate.getFullYear() + '-' + rawDate.getMonth() + '-' + rawDate.getDate();
    let time = rawDate.getHours() + ':' + rawDate.getMinutes();

    let openSeats = ryde.seats - ryde.pendingRiders.length - ryde.ridersId.length;

    let startCity = ryde.startAddress.city.charAt(0).toUpperCase() + ryde.startAddress.city.slice(1);
    let endCity = ryde.endAddress.city.charAt(0).toUpperCase() + ryde.endAddress.city.slice(1);

    function capitalizer(string) {
      let splitString = string.split(' ');
      splitString = splitString.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      return splitString.join(' ');
    }

    let startAddress = capitalizer(ryde.startAddress.street);
    let endAddress = capitalizer(ryde.endAddress.street);

    let driverRating = ryde.driver.dryverRatingAvg ? ryde.driver.dryverRatingAvg : 'Unrated';

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
              <li>{ryde.driver.name}</li>
              <li>{driverRating}</li>
            </div>
          </div>
          <div className='col s5 list-card-summary'>
            <table>
              <tbody>
                <tr><td className='right-align'><span className='bold'>From</span>:</td><td>{startAddress + ', ' + startCity + ', ' + ryde.startAddress.state}</td></tr>
                <tr><td className='right-align'><span className='bold'>To</span>:</td><td>{endAddress + ', ' + endCity + ', ' + ryde.endAddress.state}</td></tr>
                <tr><td className='right-align'><span className='bold'>Date</span>:</td><td>{date}</td></tr>
                <tr><td className='right-align'><span className='bold'>Time</span>:</td><td>{time}</td></tr>
              </tbody>
            </table>
          </div>
          {actionButton}
        </div>
        <div className='list-card-details' ref='details'>
          <div className='row'>
            <div className='col s12'>
              <p>Open Seats: {openSeats}</p>
              <input type='checkbox' checked={ryde.pets ? 'checked' : null} disabled />
              <label>Pets</label>
              <br />
              <input type='checkbox' checked={ryde.smoking ? 'checked' : null} disabled />
              <label>Smoking</label>
              <br />
              <input type='checkbox' checked={ryde.reoccurring ? 'checked' : null} disabled />
              <label>Reocurring{reocurringColon}</label>
              {reocurringDaysJSX}
            </div>
          </div>
          {riders}
        </div>
        <button className='list-card-expand-button' onClick={ (e) => this.handleExpansionToggle(e) }></button>
      </div>
    )
  }
}

const ListCard = connect(mapStateToProps, mapDispatchToProps)(ConnectedListCard);

export default ListCard;
