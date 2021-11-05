import React from "react";

import classes from "./Rover.module.css";

import img from "./assets/img/rover.png";

const rover = () => {
  return (
    <div className={classes.rover} id="rover">
      <img src={img} alt="rover" />
    </div>
  );
};

export default rover;
