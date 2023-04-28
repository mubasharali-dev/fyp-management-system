import React from "react";
import "./Button.module.css";

function Button(props) {
  const { children, onClick, type } = props;

  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
