import React, { Component } from 'react';
import '../css/bigsearch.css';
import axios from 'axios';
import { connect } from 'react-redux';
import store from '../redux/store/index';
import { liftBigSearch } from '../redux/actions/index';
import {Input,Row} from 'react-materialize';

const mapDispatchToProps = dispatch => {
  return {
    liftBigSearch: data => dispatch(liftBigSearch(data))
  }
}
const mapStateToProps = state =>{
  return {user: state.user}
}

class ConnectedBigSearch extends Component {
  // constructor(props) {
  //   super(props)
  // }

  handleBigSearch = (e)=>{
    e.preventDefault()
    if(this.props.user){
      var userId = this.props.user._id
    }
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
    let pets = this.petInput.state.value
    let cost = this.costInput.value
    let reoccur = this.reoccurInput.checked
    let seat = this.seatInput.value
    //Date.UTC turns the unpacked date and time into a time stamp
    let dateTime = Date.UTC(...sDate,...sTime)
    let current = Date.now();
    if(dateTime<=current){
      dateTime = current
    }
    console.log('this timestamp: ',(new Date(dateTime)).toUTCString());

    axios.post('/bigsearch',
    {zip,dist,sCity,eCity,dateTime,pets,cost,reoccur,seat,userId,current}).then(result =>{

      console.log('result:',result.data);
      this.props.liftBigSearch(result.data.newTrips);

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
              <Row>
                <Input label='Pets' name='Pets' type='checkbox' placeholder='Pets' ref={(input)=>{this.petInput = input;}}/>
              </Row>
            </div>
            <div className='col s12 m6'>
              <Row>
                <Input name='reoccur' label='Reoccurring' type='checkbox' ref={(input)=>{this.reoccurInput = input;}}/>
              </Row>
            </div>
            <br />
            <button type='submit' className='rydeBtn Green btn'>Submit</button>
          </div>

        </form>
      </div>
    )
  }
}
const BigSearch = connect(mapStateToProps, mapDispatchToProps)(ConnectedBigSearch);
export default BigSearch;
