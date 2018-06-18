import React, {Component} from 'react'
import './index.css';

export default class Title extends Component {
  render(){
    return(
      <div className ="Title"> {this.props.children}</div>
    );
  }


}
