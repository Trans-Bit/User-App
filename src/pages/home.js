import React, { Component } from "react";
// import openSocket from "socket.io-client";
import { subscribeToTimer } from "./sock";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { timestamp: "No val" };
  }
  handleSubmit(e) {
    subscribeToTimer((err, timestamp) =>
      this.setState({
        timestamp
      })
    );
  }
  render() {
    return (
      <div>
        {this.state.timestamp}
        <button onClick={e => this.handleSubmit(e)}>CLICK</button>
      </div>
    );
  }
}
