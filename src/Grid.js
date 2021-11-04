import React, { Component } from "react";
import Rover from "./Rover";
import "./css/grid.css";

class Grid extends Component {
  render() {
    return (
      <div className="container">
        <div className="grid">
          <div className="rover">
            <Rover />
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
