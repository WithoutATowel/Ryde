import React, { Component } from 'react';
import '../css/bigsearch.css';

class BigSearch extends Component {
  constructor(props) {
    super(props)
  }

  handleBigSearch = (e)=>{
    e.preventDefault()
    let zip = this.zipInput.value
    let dist = this.distanceInput.value
    let leave = this.leaveInput.value
    let end = this.endInput.value
    let leaveTime = this.leaveTimeInput.value
    let pets = this.petInput.checked
    let cost = this.costInput.value
    let reoccur = this.reoccurrInput.checked
    let seat = this.seatInput.value
    console.log(zip, dist, leave, reoccur);
  }

  render() {
    return (
      <div>
        <form onSubmit={e=>this.handleBigSearch(e)}>
          <input type='number' maxLength='5' placeholder='Zipcode' ref={(input)=>{this.zipInput = input;}} />
          <br />
          <input type='number' placeholder='distance' ref={(input)=>{this.distanceInput = input;}}/>
          <br />
          <input type='text' placeholder='Leaving from' ref={(input)=>{this.leaveInput = input;}}/>
          <br />
          <input type='text' placeholder='End location' ref={(input)=>{this.endInput = input;}}/>
          <br />
          <input type='number' placeholder='Leave time' ref={(input)=>{this.leaveTimeInput = input;}}/>
          <br />
          <input type='checkbox' placeholder='Pets' ref={(input)=>{this.petInput = input;}}/>
          <br />
          <input type='number' placeholder='Cost' ref={(input)=>{this.costInput = input;}}/>
          <br />
          <input type='checkbox' placeholder='Reoccuring' ref={(input)=>{this.reoccurInput = input;}}/>
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
