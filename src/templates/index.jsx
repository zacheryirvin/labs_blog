import React from "react";
import Header from "../components/header.jsx";
import PostList from "../components/postList.jsx";
import "../css/index.scss";
import { Link } from "gatsby";
import Button from "../components/pageNavButt.jsx";

const IndexPage = ({ pageContext }) => {
  let pages = [];
  const { group, index, pageCount } = pageContext;
  const pUrl = index - 1 === 1 || index - 1 === 0 ? "" : (index - 1).toString();
  const nUrl = index + 1 > pageCount ? pageCount : index + 1;
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  console.log(pages);
  return (
    <div className="indexCont">
      <div className="headcont">
        <Header headerText="Lambda Labs Blog" />
      </div>
      <PostList pageContext={pageContext} />
      <div className="pageNav">
        <Link to={pUrl}>
          <Button text="Previous Week" />
        </Link>
        <div className="pageLinks">
          {pages.map((p, index) => {
            if (p === 1) {
              return <Link to={""}>{p}</Link>;
            } else {
              return <Link to={index + 1}>{p}</Link>;
            }
          })}
        </div>
        <Link to={nUrl}>
          <Button text="Next Week" />
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;
