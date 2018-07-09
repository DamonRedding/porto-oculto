// src/components/Post/index.js
import React, { Component } from "react";
import "./Post.css";
class Post extends Component
{
  render()
  {
    const address = this.props.address;
    const image = this.props.image;
    const state = this.props.state;

    return <article className="Post" ref="Post">
      <div className="Post-image">
        <div className="Post-image-bg">
          <img alt="Icon Living" src={image}/>
        </div>
      </div>
      <div className="Post-address">
        <strong>{address}</strong>
      </div>
      <div className="Post-rating-state">
        <span>{state}</span>
      </div>
    </article>;
  }
}
export default Post;
