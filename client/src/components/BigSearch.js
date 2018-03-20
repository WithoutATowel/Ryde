import React, { Component } from 'react';
import '../css/bigsearch.css';
import axios from 'axios';
import { connect } from 'react-redux';
// import store from '../redux/store/index';
import { liftBigSearch } from '../redux/actions/index';

const mapDispatchToProps = dispatch => {
  return {
    liftBigSearch: data => dispatch(liftBigSearch(data))
  }
}

class ConnectedBigSearch extends Component {
  // constructor(props) {
  //   super(props)
  // }

  handleBigSearch = (e)=>{
    e.preventDefault()
    let zip = this.zipInput.value
    let dist = this.distanceInput.value
    let sCity = this.sCityInput.value
    let eCity= this.eCityInput.value
    let sTime = this.sTimeInput.value
    let pets = this.petInput.checked
    let cost = this.costInput.value
    let reoccur = this.reoccurInput.checked
    let seat = this.seatInput.value

    axios.post('/bigsearch',
    {zip,dist,sCity,eCity,sTime,pets,cost,reoccur,seat}).then(result =>{
      this.props.liftBigSearch(result.data);
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={e=>this.handleBigSearch(e)}>
          <input type='number' maxLength='5' placeholder='Departing Zipcode' autoComplete='postal-code' ref={(input)=>{this.zipInput = input;}} />
          <br />
          <input type='number' placeholder='Max Distance' ref={(input)=>{this.distanceInput = input;}}/>
          <br />
          <input type='text' placeholder='Departing City' autoComplete='departing-city' ref={(input)=>{this.sCityInput = input;}}/>
          <br />
          <input type='text' placeholder='Destination City' autoComplete='destination-city' ref={(input)=>{this.eCityInput = input;}}/>
          <br />
          <input type='number' placeholder='Departure Time' autoComplete='departure-time' ref={(input)=>{this.sTimeInput = input;}}/>
          <br />
          <p>
            <input id='pets' type='checkbox' placeholder='Pets' ref={(input)=>{this.petInput = input;}}/>
            <label htmlFor='pets'>Pets</label>
          </p>
          <br />
          <input type='number' placeholder='Cost' ref={(input)=>{this.costInput = input;}}/>
          <br />
          <p>
            <input id='reoccur' type='checkbox' ref={(input)=>{this.reoccurInput = input;}}/>
            <label htmlFor='reoccur'>Reoccuring</label>
          </p>
          <br />
          <input type='number' placeholder='Seatting' ref={(input)=>{this.seatInput = input;}}/>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
const BigSearch = connect(null, mapDispatchToProps)(ConnectedBigSearch);
export default BigSearch;
