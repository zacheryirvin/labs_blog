import React from "react";
import "../css/pNav.scss";

const Button = props => {
  return (
    <div className="butCont">
      <button className="pbutt">{props.text}</button>
    </div>
  );
};

export default Button;
