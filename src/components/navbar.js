import React, { Component } from "react";
import "./comp.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <span>TransBit</span>
        <Link to="login">
          <span style={{ float: "right" }}>Login</span>
        </Link>
      </div>
    );
  }
}
