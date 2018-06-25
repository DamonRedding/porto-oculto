import React, { Component } from 'react'


import './index.css'
import RedCircle from './RedCircle.svg'

export default class SatatusLabel extends Component{
  render(){
    return(
      <div className="SatatusLabel">
        <div className="SatatusLabel-circle--red"></div>
        <div className="StatusLabel-text">{this.props.children}</div>
    </div>
    );
  }
}
