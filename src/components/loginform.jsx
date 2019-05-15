import React from "react";
import { useState } from "react";
import axios from "axios";
import Header from "./header.jsx";
import { Link } from "gatsby";
import "../css/login.scss";
import "../css/index.scss";

const LoginForm = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  const handleChange = e => {
    const text = e.target.value;
    const target = e.target.id;
    target === "username"
      ? setInputs({ ...inputs, username: text })
      : setInputs({ ...inputs, password: text });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = await axios.post(
        "https://labs-blog.herokuapp.com/login",
        inputs
      );
      window.localStorage.setItem("token", token.data.token);
      setInputs({ ...inputs, username: "", password: "" });
      setToken({ token: token.data.token });
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="indexCont">
      <Header />
      <div className={token ? "loginMessage" : "hidden"}>Logged In</div>
      <div className="formCont">
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="usernameCont">
            <label className="username" htmlFor="username">
              Username:{" "}
            </label>
            <input
              type="text"
              id="username"
              onChange={handleChange}
              value={inputs.username}
            />
          </div>
          <div className="passwordCont">
            <label className="password" htmlFor="password">
              Password:{" "}
            </label>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              value={inputs.password}
            />
          </div>
          <button className="loginButton">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
