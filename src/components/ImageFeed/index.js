import React, { Component } from 'react';

import './index.css';
import oldHouse from './oldHause.jpg';

export default class ImageFeed extends Component {
  render() {
    return (
      <div className="Image">
        <img alt="placeholder" src={oldHouse} className="image-feed" />
      </div>
    );
  }
}
