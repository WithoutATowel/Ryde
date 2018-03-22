import React, { Component } from 'react';
import { connect } from 'react-redux';
import { liftCurrentPageToState } from '../redux/actions/index';
import '../css/ourteam.css';

const mapDispatchToProps = dispatch => {
  return {
    liftCurrentPageToState: page => dispatch(liftCurrentPageToState(page))
  }
}

class ConnectedOurTeam extends Component {

  componentDidMount() {
    this.props.liftCurrentPageToState('/ourteam')
  }

  render() {

    return (
      <div>
          <h1 className='our-team-h1'>Our Team</h1>
          <div className='row'>
              <div className='col s12 m3 team-member-col'>
                  <img src='https://www.placecage.com/c/300/300' alt='' />
                  <h5>Brett Spencer</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo turpis, placerat nec quam vel,
                     ultrices pharetra felis. Cras non purus in velit sagittis tristique id varius sem. Ut egestas, sapien
                     a posuere ultricies, augue tellus ullamcorper ipsum, non tristique elit enim vel libero. Aliquam
                     vehicula ligula felis, lacinia malesuada sem lobortis ac.</p>
                  <a href='https://www.linkedin.com/in/brett-spencer/' target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin fa-lg"></i></a>
                  <a href='https://github.com/WithoutATowel' target='_blank' rel="noopener noreferrer"><i className="fab fa-github-square fa-lg"></i></a>
                  <a href='http://www.brettlspencer.com' target='_blank' rel="noopener noreferrer">Portfolio</a>
              </div>
              <div className='col s12 m3 team-member-col'>
                  <img src='https://www.placecage.com/c/300/300' alt='' />
                  <h5>Scott Rosehart</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo turpis, placerat nec quam vel,
                     ultrices pharetra felis. Cras non purus in velit sagittis tristique id varius sem. Ut egestas, sapien
                     a posuere ultricies, augue tellus ullamcorper ipsum, non tristique elit enim vel libero. Aliquam
                     vehicula ligula felis, lacinia malesuada sem lobortis ac.</p>
                  <a href='https://www.linkedin.com/in/scottrosehart/' target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin fa-lg"></i></a>
                  <a href='https://github.com/ScoRoc' target='_blank' rel="noopener noreferrer"><i className="fab fa-github-square fa-lg"></i></a>
                  <a href='http://www.scottrosehart.com' target='_blank' rel="noopener noreferrer">Portfolio</a>
              </div>
              <div className='col s12 m3 team-member-col'>
                  <img src='https://www.placecage.com/c/300/300' alt='' />
                  <h5>Brant Porter</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo turpis, placerat nec quam vel,
                     ultrices pharetra felis. Cras non purus in velit sagittis tristique id varius sem. Ut egestas, sapien
                     a posuere ultricies, augue tellus ullamcorper ipsum, non tristique elit enim vel libero. Aliquam
                     vehicula ligula felis, lacinia malesuada sem lobortis ac.</p>
                  <a href='https://www.linkedin.com/in/brant-porter/' target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin fa-lg"></i></a>
                  <a href='https://github.com/brantchyoga' target='_blank' rel="noopener noreferrer"><i className="fab fa-github-square fa-lg"></i></a>
                  <a href='http://www.brantchyoga.tech' target='_blank' rel="noopener noreferrer">Portfolio</a>
              </div>
              <div className='col s12 m3 team-member-col'>
                  <img src='https://www.placecage.com/c/300/300' alt='' />
                  <h5>Sean Cesmat</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam justo turpis, placerat nec quam vel,
                     ultrices pharetra felis. Cras non purus in velit sagittis tristique id varius sem. Ut egestas, sapien
                     a posuere ultricies, augue tellus ullamcorper ipsum, non tristique elit enim vel libero. Aliquam
                     vehicula ligula felis, lacinia malesuada sem lobortis ac.</p>
                  <a href='https://www.linkedin.com/in/seancesmat/' target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin fa-lg"></i></a>
                  <a href='https://github.com/Sean-Cesmat' target='_blank' rel="noopener noreferrer"><i className="fab fa-github-square fa-lg"></i></a>
                  <a href='http://www.seancesmat.com' target='_blank' rel="noopener noreferrer">Portfolio</a>
              </div>
          </div>
      </div>
    )
  }
}

const OurTeam = connect(null, mapDispatchToProps)(ConnectedOurTeam);

export default OurTeam;
