import PropTypes from 'prop-types';
import React, { Component } from 'react';

import CloseIcon from './close.svg';
import './index.css';


export default class PageTitleFilter extends Component {
  render() {
    return (
      <div className="PageTitleFilter">
        <img alt="TNDS logo" src={CloseIcon} className="CloseIcon" />
        <h1>{this.props.children}</h1>
        <h3 className="PageTitleFilter--text">clear</h3>
      </div>
    );
  }
}
PageTitleFilter.propTypes = {
  children: PropTypes.node.isRequired,
};
