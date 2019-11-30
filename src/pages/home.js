import React, { Component } from "react";
import io from "socket.io-client";
import { subscribeToTimer } from "./sock";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: "No val" };
  }
  handleSubmit(e) {
    e.preventDefault();
    // this.socket.emit("on", "Calling for ambulance");
    // subscribeToTimer();
    subscribeToTimer((err, msg) =>
      this.setState({
        msg
      })
    );
  }
  render() {
    return (
      <div>
        {this.state.msg}
        <button onClick={e => this.handleSubmit(e)}>CLICK</button>
      </div>
    );
  }
}
