// import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './index.css';
import Camera from './camera.svg';

export default class IconCamera extends Component {
  render() {
    return (
      <div className="Icon">
        <img alt="TNDS logo" src={Camera} className="Icon-image" />
      </div>
    );
  }
}
