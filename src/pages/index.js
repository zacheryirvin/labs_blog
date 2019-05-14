import React from "react";
import Header from "../components/header.jsx";
import PostList from "../components/postList.jsx";
import "../css/index.scss";

const IndexPage = () => {
  return (
    <div className="indexCont">
      <div className="headcont">
        <Header headerText="Lambda Labs Blog" />
      </div>
      <PostList />
    </div>
  );
};

export default IndexPage;
