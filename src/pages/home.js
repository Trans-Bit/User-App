import React, { Component } from "react";
import io from "socket.io-client";
import { subscribeToTimer } from "./sock";
import LoopIcon from "@material-ui/icons/Loop";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: "", count: 0, loading: false };
  }
  handleSubmit(e) {
    e.preventDefault();
    // this.socket.emit("on", "Calling for ambulance");
    // subscribeToTimer();
    this.setState({ count: this.state.count + 1 });
    if (this.state.count === 3) {
      // alert(this.state.msg);
      this.setState({ loading: true, msg: "calling" });
      subscribeToTimer((err, msg) =>
        this.setState({
          msg
        })
      );
      // alert(this.state.msg);
      // this.setState({ loading: false });
    }
  }
  render() {
    return (
      <div>
        <span className="amb">
          {/* {this.state.msg} */}
          {/* <br /> */}
          <button onClick={e => this.handleSubmit(e)} className="sos">
            {this.state.loading ? (
              <div>
                <LoopIcon />
                <div>{this.state.msg}</div>
              </div>
            ) : (
              <span>SOS</span>
            )}
          </button>
        </span>
      </div>
    );
  }
}
