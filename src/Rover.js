import React from "react";

import "./css/rover.css";

import img from "../src/assets/img/rover.png";

const rover = () => {
  return (
    <div id="rover">
      <img src={img} alt="rover" />
    </div>
  );
};

export default rover;
