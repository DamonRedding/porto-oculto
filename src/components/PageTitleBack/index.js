import PropTypes from 'prop-types';
import React, { Component } from 'react';

import BackArrow from './back.svg';
import './index.css';


export default class PageTitleBack extends Component {
  render() {
    return (
      <div className="PageTitleIcons">
        <img alt="TNDS logo" src={BackArrow} className="BackArrow" />
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}
PageTitleBack.propTypes = {
  children: PropTypes.string.isRequired,
};
