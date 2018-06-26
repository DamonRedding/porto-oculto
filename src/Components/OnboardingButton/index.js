import React, {Component} from 'react';

import './index.css';
import arrow from './shape.svg'


export default class OnboardingButton extends Component {

  render(){
    return(
      <button className="OnboardingButton">{this.props.children}</button>
        <img alt="TNDS logo" src={ arrow } className="CloseIcon"/>
    );
  }

}
