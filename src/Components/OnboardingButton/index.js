import React, { Component }  from 'react'

import Next from './shape.svg';
import './index.css'


export default class OnboardingButton extends Component{
  render(){
    return(
      <div className="OnboardingButton">
        <h1>{this.props.children}</h1>
        <img alt="TNDS logo" src={ Next } className="NextIcon"/>
      </div>
    );
  }
}
