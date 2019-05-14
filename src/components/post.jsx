import React from "react";
import "../css/post.scss";

const Post = (props, { data }) => {
  return (
    <div className="postCont">
      <div className="marginCont">
        <h2 className="title">{props.title}</h2>
        <h3 className="author">Author: {props.author}</h3>
        <p className="created_at">Creation Date: {props.created_at}</p>
      </div>
    </div>
  );
};

export default Post;
