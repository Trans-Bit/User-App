import React, { Component } from "react";
import "./comp.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <img
          src="https://c7.uihere.com/icons/882/94/402/truck-delivery-6e1abed480d1ee64c910ce334027d6ab.png"
          className="image"
        />
        <span className="head">TransBit</span>
        <Link to="login">
          <span style={{ float: "right" }}>Login</span>
        </Link>
      </div>
    );
  }
}
