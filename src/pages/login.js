import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./page.css";
import { db } from "../firebase";
import { identifier } from "@babel/types";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.email,
      password: this.password
    };
  }
  handleSubmit(e) {
    db.collection("users")
      .doc(this.state.email)
      .get()
      .then(a => {
        if (a.exists) {
          if (this.state.password === a.data().password) {
            console.log("login successful");
          } else {
            console.log("invalid password");
          }
        } else {
          console.log("No user found");
        }
      });
  }
  render() {
    return (
      <div>
        <div className="msg">Message displayed here</div>
        <div className="container">
          <h2 className="heading">LOGIN</h2>
          <input
            type="text"
            placeholder="email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <br />
          <button onClick={e => this.handleSubmit(e)}>LOGIN</button>
          <br />
          <div className="text">
            Not a member?{" "}
            <Link to="/signup">
              <span classname="details" style={{ color: "#6f64a3" }}>
                Sign up
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
