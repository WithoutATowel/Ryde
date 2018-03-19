import React, { Component } from 'react';
import '../css/bigsearch.css';
import axios from 'axios';

class BigSearch extends Component {
  constructor(props) {
    super(props)
  }

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
    {zip,dist,sCity,eCity,sTime,pets,cost,reoccur,seat}).then(
      result =>{
      console.log(result.data);
    })
  }

  render() {
    return (
      <div className='col m4'>
        <form onSubmit={e=>this.handleBigSearch(e)}>
          <input type='number' maxLength='5' placeholder='Leaving from...Zipcode?' ref={(input)=>{this.zipInput = input;}} />
          <br />
          <input type='number' placeholder='Distance?' ref={(input)=>{this.distanceInput = input;}}/>
          <br />
          <input type='text' placeholder='Leaving...City?' ref={(input)=>{this.sCityInput = input;}}/>
          <br />
          <input type='text' placeholder='Going to...City?' ref={(input)=>{this.eCityInput = input;}}/>
          <br />
          <input type='number' placeholder='Leave time' ref={(input)=>{this.sTimeInput = input;}}/>
          <br />
          <p>
            <input id='pets' type='checkbox' placeholder='Pets' ref={(input)=>{this.petInput = input;}}/>
            <label for='pets'>Pets?</label>
          </p>
          <br />
          <input type='number' placeholder='Cost' ref={(input)=>{this.costInput = input;}}/>
          <br />
          <p>
            <input id='reoccur' type='checkbox' ref={(input)=>{this.reoccurInput = input;}}/>
            <label for='reoccur'>Reoccuring?</label>
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

export default BigSearch;
