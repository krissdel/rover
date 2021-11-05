import { Component } from "react";
import "./css/App.css";
import Grid from "./components/Grid/Grid";
import Horloge from "./containers/Horloge/Horloge";
import React from "react";

class App extends Component {
  keypressHandler = (e) => {
    const keypressRover = document.querySelector(".rover");
    console.log(e);
    if (e.key === "r") {
      keypressRover.style.transform = "rotate(90deg)"; //test
      console.log("key : r");
    } else if (e.key === "l") {
      keypressRover.style.transform = "rotate(-90deg)"; //test
    } else if (e.key === "f") {
      keypressRover.style.gridColumn = "5"; //test
    } else {
      keypressRover.style.background = "red"; //test
    }
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>ROVER</h1>
        </div>
        <Grid />
        <div className="result">
          <div className="start">
            start :
            <input type="text" id="one" onKeyPress={this.keypressHandler} />
          </div>
          <div className="position">
            Position :
            <input />
          </div>
        </div>
        <Horloge />
      </div>
    );
  }
}

export default App;
