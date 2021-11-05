import React from "react";
import { Component } from "react";
import classes from "./Horloge.module.css";
class Horloge extends Component {
  state = {
    date: new Date(),
  };
  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <h3 className={classes.horloge}>
        Horloge : {this.state.date.toLocaleTimeString()}
      </h3>
    );
  }
}
export default Horloge;
