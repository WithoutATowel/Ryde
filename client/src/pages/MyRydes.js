import React, { Component } from 'react';
import { connect } from 'react-redux';
// import store from '../redux/store/index';
import { toggleRydesTab, liftBigSearch } from '../redux/actions/index';
import ListBox from '../components/ListBox';
import axios from 'axios';

const mapDispatchToProps = dispatch => {
  return {
    toggleRydesTab: bool => dispatch(toggleRydesTab(bool)),
    liftBigSearch: data => dispatch(liftBigSearch(data))
  }
}

const mapStateToProps = state => {
  return {
    rydesTabIsToggled: state.rydesTabIsToggled,
    user: state.user
  }
}

class ConnectedMyRydes extends Component {
  // constructor(props) {
  //   super(props)
  // }

  handleTabToggle = (event) => {
    // If Rydes tab currently selected, query against the '/mydryves' route and vice versa
    let route = !this.props.rydesTabIsToggled ? '/mydryves' : '/myrydes';
    // Query for user's rydes or dryves as needed, where results are stored by server in Redux under 'searchResults'
    axios.get(route, { userId: this.props.user._id })
      .then( result => {
        if (result.data && result.data.length > 0) {
          this.props.liftBigSearch(result.data);
        } else {
          this.props.liftBigSearch([]);
        }
        // Update rydesTabIsToggled state value in Redux
        this.props.toggleRydesTab(!this.props.rydesTabIsToggled);
      });
  }

  componentDidMount() {
    if (this.props.user) {
      let route = this.props.rydesTabIsToggled ? '/mydryves' : '/myrydes';
      axios.post(route, { userId: this.props.user._id })
      .then( result => {
        if (result.data && result.data.length > 0) {
          this.props.liftBigSearch(result.data);
        } else {
          this.props.liftBigSearch([]);
        }
      });
    } else {
      let token = localStorage.getItem('rydeAppToken')
      if (token === 'undefined' || token === 'null' || token === '' || token === undefined || token === null) {
        localStorage.removeItem('rydeAppToken')
        this.props.logout()
      } else {
        axios.post('/auth/me/from/token', {
          token
        }).then( result => {
          localStorage.setItem('rydeAppToken', result.data.token)
          this.props.liftTokenToState(result.data);
          axios.post('/myrydes', { userId: this.props.user._id })
            .then( result => {
              if (result.data && result.data.length > 0) {
                this.props.liftBigSearch(result.data);
              } else {
                this.props.liftBigSearch([]);
              }
            });
        }).catch( err => console.log(err))
      }
    }
  }

  render() {
    console.log(this.props.rydesTabIsToggled);
    console.log('isRyde ', this.props.rydesTabIsToggled)
    return (
      <div>
        <div class="flexCol-vCenter-hCenter">
          <h1>My Rydes</h1>
          <div className="switcher">
            <input
              type="radio"
              name="balance"
              value="MyRydes"
              id="my-rydes-radio"
              className="switcher__input switcher__input--myRydes"
              onChange={this.handleTabToggle}
              defaultChecked={!this.props.rydesTabIsToggled ? 'checked' : null} />
            <label htmlFor="my-rydes-radio" className="switcher__label">My Rydes</label>

            <input
              type="radio"
              name="balance"
              value="MyDrives"
              id="my-drives-radio"
              className="switcher__input switcher__input--myDrives"
              onChange={this.handleTabToggle}
              defaultChecked={this.props.rydesTabIsToggled ? 'checked' : null} />
            <label htmlFor="my-drives-radio" className="switcher__label">My Drives</label>

            <span className="switcher__toggle"></span>
          </div>
        </div>
        <ListBox />
      </div>

    )
  }
}

const MyRydes = connect(mapStateToProps, mapDispatchToProps)(ConnectedMyRydes);

export default MyRydes;
