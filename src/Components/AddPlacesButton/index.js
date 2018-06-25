import React, { Component } from 'react'


import './index.css'
import logo from './add.svg'

export default class AddPlacesButton extends Component{
  render(){
    return(

        <button className="AddPlacesButton">
          <div Class="Addplace-container">
            <img alt="TNDS logo" src={ logo } className="Button-icon" />
            <div className="Addplace-container--text">{this.props.children}</div>
          </div>
        </button>
    );
  }
}
