import React from "react";
import { Link } from "gatsby";
import "../css/header.scss";

const Header = props => {
  const token = localStorage.getItem("token");
  const logout = () => {
    localStorage.removeItem("token");
  };
  return (
    <div className="cont">
      <div className="headerCont">
        <h1 className="headerTitle">{props.headerText}</h1>
        <Link to="/">Home</Link>
        <Link to="/newPost">New Post</Link>
        <Link to="/login">Login</Link>
        <div className="logout" onClick={logout}>
          <Link to="/">Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
