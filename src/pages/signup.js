import React, { Component } from "react";
import "./page.css";
import { Link } from "react-router-dom";
import { db } from "../firebase";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
      age: "",
      gender: "",
      mobile: "",
      upi: ""
    };
  }

  handleSubmit(e) {
    var payload = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      age: this.state.age,
      gender: this.state.gender,
      mobile: this.state.mobile,
      upi: this.state.upi
    };
    console.log(payload);
    // db.collection("user")
    //   .get()
    //   .then(doc => console.log(doc));
    db.collection("users")
      .doc(this.state.email)
      .set({ ...payload });
  }
  render() {
    return (
      <div>
        <span className="msg">Messageeee displayed here</span>

        <div className="container">
          <h2 className="heading">SIGNUP</h2>
          <input
            type="text"
            placeholder="Name"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <br />
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
          <input
            type="number"
            placeholder="age"
            onChange={e => this.setState({ age: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="gender (M/F)"
            onChange={e => this.setState({ gender: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Mobile No"
            onChange={e => this.setState({ mobile: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="UPI"
            onChange={e => this.setState({ UPI: e.target.value })}
          />
          <br />
          <button onClick={e => this.handleSubmit(e)}>LOGIN</button>
          <div className="text">
            Already a member?
            <Link to="/login">
              <span classname="details" style={{ color: "#6f64a3" }}>
                Log in
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
