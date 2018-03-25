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
                  <div className='team-prof-pic' id='brett'></div>
                  <h5>Brett Spencer</h5>
                  <p>I’m a full stack developer with a passion for intuitive design and scalable implementation. Currently
                     working as a Product Technology Manager specializing in software workflow improvement, I bring a strong
                     user focus and a love of simplicity to development.</p>
                  <a href='https://www.linkedin.com/in/brett-spencer/' target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin fa-lg"></i></a>
                  <a href='https://github.com/WithoutATowel' target='_blank' rel="noopener noreferrer"><i className="fab fa-github-square fa-lg"></i></a>
                  <a href='http://www.brettlspencer.com' target='_blank' rel="noopener noreferrer">Portfolio</a>
              </div>
              <div className='col s12 m3 team-member-col'>
                  <div className='team-prof-pic' id='scott'></div>
                  <h5>Scott Rosehart</h5>
                  <p>I am passionate about creative, outside-of-the-box thinking
                  that intuitively works. Being a full stack developer as well
                  as a musician, I love creating unique, new ideas and then bringing
                  them to life. There is nothing more satisfying than seeing a passion
                  project to completion and being proud of what you created. Being
                  a snowboarder, I value getting back in touch with nature and utilizing
                  those experiences as inspiration to synthesize nature’s effortlessness
                  with a sleek, yet modern feel.</p>
                  <p>I create web apps that work. My strength in JavaScript and
                  React brings the web to life and my knowledge of Node and Python
                  build the foundation needed to make my apps work.</p>
                  <a href='https://www.linkedin.com/in/scottrosehart/' target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin fa-lg"></i></a>
                  <a href='https://github.com/ScoRoc' target='_blank' rel="noopener noreferrer"><i className="fab fa-github-square fa-lg"></i></a>
                  <a href='http://www.scottrosehart.com' target='_blank' rel="noopener noreferrer">Portfolio</a>
              </div>
              <div className='col s12 m3 team-member-col'>
                  <div className='team-prof-pic' id='brant'></div>
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
                  <div className='team-prof-pic' id='sean'></div>
                  <h5>Sean Cesmat</h5>
                  <p>Creative full stack web developer who loves to figure out how things work.
                    Observant problem solver that leverages technology to simplify and streamline
                    complex tasks. I thrive in a collaborative environment and approach everything
                    with empathy, and compassion.</p>
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
