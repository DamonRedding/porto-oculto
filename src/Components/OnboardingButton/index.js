import React, {Component} from 'react';

import './index.css';
import './shape.svg'


export default class OnboardingButton extends Component {

  render(){
    return(
      <button className="OnboardingButton">{this.props.children}</button>
      <img atl="Arrow" src={Shape}>
    );
  }

}
