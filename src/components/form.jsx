import React from "react";
import { useState } from "react";
import axios from "axios";
import "../css/form.scss";

const Form = props => {
  const [inputs, setInputs] = useState({
    title: props.title || "",
    body: props.title || "",
    author: "Zachery Irvin"
  });

  const handleChange = e => {
    const text = e.target.value;
    const target = e.target.id;
    target === "body"
      ? setInputs({ ...inputs, body: text })
      : setInputs({ ...inputs, title: text });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const headers = { authorize: window.localStorage.getItem("token") };
      const newPost = await axios.post(
        "https://labs-blog.herokuapp.com/newPost",
        inputs,
        { headers: headers }
      );
      setInputs({ ...inputs, body: "", title: "" });
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <div className="formCont">
      <form className="postForm" onSubmit={handleSubmit}>
        <div className="postTitleCont">
          <label className="postTitle" htmlFor="title">
            Title:{" "}
          </label>
          <input
            type="text"
            id="title"
            value={inputs.title}
            onChange={handleChange}
          />
        </div>
        <div className="bodyCont">
          <label className="postBody" htmlFor="body">
            Content:{" "}
          </label>
          <textarea
            id="body"
            name="body"
            cols="50"
            rows="20"
            value={inputs.body}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
