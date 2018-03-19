import React, { Component } from 'react';
import '../css/postaryde.css';
import RydeForm from '../components/RydeForm';

class PostARyde extends Component {
  constructor(props) {
    super(props)
    this.handlePostARydeSubmit = this.handlePostARydeSubmit.bind(this)
  }

  handlePostARydeSubmit(e) {
    e.preventDefault()
    console.log(this.rydeName.value);
    var thing = {
      driverId: '',
      rydeName: this.rydeName.value,
      startAddress: {
        street: this.startStreet.value,
        city: this.startCity.value,
        state: this.startState.value,
        zip: this.startZip.value,
      },
      endAddress: {
        street: this.endStreet.value,
        city: this.endCity.value,
        state: this.endState.value,
        zip: this.endZip.value,
      },
      departDate: this.departDate.value,
      departTime: this.departTime.value,


    }
    //axios.post()
    //driverId:
  }

  render() {
    return (
      <div id="post-a-ryde">
        <h2>Post A Ryde</h2>
        <RydeForm
          rydeName={(input) => this.rydeName = input}
          startStreet={(input) => this.startStreet = input}
          startCity={(input) => this.startCity = input}
          startState={(input) => this.startState = input}
          startZip={(input) => this.startZip = input}
          endStreet={(input) => this.endStreet = input}
          endCity={(input) => this.endCity = input}
          endState={(input) => this.endState = input}
          endZip={(input) => this.endZip = input}
          departDate={(input) => this.departDate = input}
          departTime={(input) => this.departTime = input}
          onPostARydeSubmit={this.handlePostARydeSubmit} />
      </div>
    )
  }
}

export default PostARyde;
