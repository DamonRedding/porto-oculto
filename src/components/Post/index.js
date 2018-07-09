// src/components/Post/index.js
import React, { Component } from "react";
import "./Post.css";
class Post extends Component
{
  render()
  {
    return <article className="Post" ref="Post">
      <div className="Post-image">
        <div className="Post-image-bg">
          <img alt="Icon Living" src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
        </div>
      </div>
      <div className="Post-address">
        <strong>Rua de Costa Cabral,400</strong>
      </div>
      <div className="Post-rating-state">
        <span>Bad State</span>
      </div>
    </article>;
  }
}
export default Post;
