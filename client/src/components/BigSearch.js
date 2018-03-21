import React, { Component } from 'react';
import '../css/bigsearch.css';
import axios from 'axios';
import { connect } from 'react-redux';
import store from '../redux/store/index';
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
    //split returns an array without special characters which I parseint with +
    let sDate= this.departDate.value.split('-').map((date,index)=>{
      if(index === 1){
        return +date-1
      } else {
        return +date
      }
    })
    let sTime = this.departTime.value.split(':').map(time=>+time)
    let pets = this.petInput.checked
    let cost = this.costInput.value
    let reoccur = this.reoccurInput.checked
    let seat = this.seatInput.value
    //Date.UTC turns the unpacked date and time into a time stamp
    console.log('The inputs are: ');
    console.log(...sDate,...sTime);
    let dateTime = Date.UTC(...sDate,...sTime)
    console.log(this.departDate.value,this.departTime.value);
    console.log('timestamp: ',dateTime);
    console.log('this timestamp: ',(new Date(dateTime)).toUTCString());
    console.log((new Date(1525170120000)).toUTCString());


    axios.post('/bigsearch',
    {zip,dist,sCity,eCity,dateTime,pets,cost,reoccur,seat}).then(result =>{
      this.props.liftBigSearch(result.data);
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={e=>this.handleBigSearch(e)}>

          <div className="row">
            <div className="col s12 m6">
              <input type='number' maxLength='5' placeholder='Departing Zipcode' autoComplete='postal-code' ref={(input)=>{this.zipInput = input;}} />
            </div>
            <div className="col s12 m6">
              <input type='number' placeholder='Max Distance' ref={(input)=>{this.distanceInput = input;}}/>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m6">
              <input type='text' placeholder='Departing City' autoComplete='departing-city' ref={(input)=>{this.sCityInput = input;}}/>
            </div>
            <div className="col s12 m6">
            <input type='text' placeholder='Destination City' autoComplete='destination-city' ref={(input)=>{this.eCityInput = input;}}/>
            </div>
          </div>

          <div className="row">
            <div className="col s12 m6">
              <input type='number' placeholder='Max Cost' ref={(input)=>{this.costInput = input;}}/>
            </div>
            <div className="col s12 m6">
              <input type='number' placeholder='Seats Available' ref={(input)=>{this.seatInput = input;}}/>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <input type="date" className="datepicker" placeholder="Date To Depart" ref={(input)=>{this.departDate = input;}} />
            </div>
            <div className='col s12 m6'>
              <input type="text" className="timepicker" placeholder="Time To Depart" ref={(input)=>{this.departTime = input;}} />
            </div>
          </div>
          <div className='row'>
            <div className="col s12 m6">
              <p>
                <input id='pets' type='checkbox' placeholder='Pets' ref={(input)=>{this.petInput = input;}}/>
                <label htmlFor='pets'>Pets</label>
              </p>
            </div>
            <div className='col s12 m6'>
              <p>
                <input id='reoccur' type='checkbox' ref={(input)=>{this.reoccurInput = input;}}/>
                <label htmlFor='reoccur'>Reoccuring</label>
              </p>
            </div>
            <br />
            <button type='submit' className='rydeBtn Green btn'>Submit</button>
          </div>

        </form>
      </div>
    )
  }
}
const BigSearch = connect(null, mapDispatchToProps)(ConnectedBigSearch);
export default BigSearch;
