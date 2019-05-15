import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Header from "../components/header.jsx";
import axios from "axios";
import EditForm from "../components/editForm.jsx";
import "../css/index.scss";
import "../css/post.scss";

const Post = ({ data }) => {
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
  });
  const post = data.postgres.postById;
  const handleDelete = async e => {
    e.preventDefault();
    if (typeof window !== undefined) {
      try {
        const headers = { authorize: window.localStorage.getItem("token") };
        await axios.delete(`https://labs-blog.herokuapp.com/post/${post.id}`, {
          headers: headers
        });
      } catch (err) {
        console.log(err.response);
      }
    }
  };
  return (
    <div className="indexCont">
      <Header />
      <div className="postCont">
        <div className="marginCont">
          {token ? (
            <h4 className="delete" onClick={handleDelete}>
              Delete
            </h4>
          ) : null}
          <h2 className="title">{post.title}</h2>
          <h3 className="author">{post.author}</h3>
          <p className="body">{post.body}</p>
        </div>
      </div>
      {window.localStorage.getItem("token") ? (
        <EditForm id={post.id} title={post.title} body={post.body} />
      ) : null}
    </div>
  );
};

export const query = graphql`
  query($postid: Int!) {
    postgres {
      postById(id: $postid) {
        id
        title
        author
        body
      }
    }
  }
`;

export default Post;
