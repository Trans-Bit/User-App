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
      password: this.password,
      hide: true
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
            this.setState({ hide: false });
            // document.getElementById("msg").display = "block";
            // document.getElementById("msg").innerHTML = "Invalid Password";
          }
        } else {
          console.log("No user found");
          this.setState({ hide: false });
        }
      });
  }
  render() {
    return (
      <div>
        <span className={this.state.hide ? "msg" : "msg1"}>
          Invalid credentials
        </span>
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
