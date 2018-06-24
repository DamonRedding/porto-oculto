import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class BackToBrowseButton extends Component{
  render(){
    return(
      <button className="BackToBrowseButton">{this.props.children}</button>
    );
  }
}

BackToBrowseButton.propTypes = {
  children: PropTypes.node.isRequired,
};
