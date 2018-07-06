import React, { Component }  from 'react'

import Next from './shape.svg';
import './index.css'


export default class OnboardingButton extends Component{
  render(){
    return(
      <div className="OnboardingButton">
        <img alt="TNDS logo" src={ Next } className="NextIcon"/>
        <h3 className="OnboardingButton--text">{this.props.children}</h3>
      </div>
    );
  }
}
