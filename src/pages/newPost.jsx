import React from "react";
import Form from "../components/form.jsx";
import Header from "../components/header.jsx";
import "../css/index.scss";

const NewPost = () => {
  return (
    <div className="indexCont">
      <div className="newPostCont">
        <Header />
        <Form />
      </div>
    </div>
  );
};

export default NewPost;
