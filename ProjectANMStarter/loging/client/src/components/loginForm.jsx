import ReactDOM from "react-dom";
import React from "react";
import $ from "jquery";
import jwt_decode from "jwt-decode";
import Signup from "./signupform.jsx";
const bcrypt = require("bcryptjs");
// import App from "./HomePage/client/src/app.jsx";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componant: (
        <div>
          <div style={{ textAlign: "center" }}>
            <img
              className="logo"
              src="https://previews.123rf.com/images/tanyastock/tanyastock1609/tanyastock160901582/62841748-user-icon-human-person-symbol-avatar-login-sign-blue-circle-button-with-flat-web-icon-vector.jpg"
            ></img>
            <h2>IFLscience Login-Signup</h2>
            <p className="join">New to IFL Science? Join</p>
          </div>
          <div className="auth">
            <form onSubmit={this.loginFun.bind(this)} className="ui form">
              <div className="field">
                <label className="em">Email</label>
                <span class="required">*</span>
                <input id="email" placeholder="email" />
              </div>

              <div className="field">
                <label className="pass">Password</label>
                <span className="required">*</span>
                <input type="password" id="password" placeholder="password" />
              </div>
              <div>
                <button
                  onClick={this.getUser.bind(this)}
                  type="submit"
                  className="ui button"
                >
                  Login
                </button>
                <span className="choose">or</span>
                <button
                  // onClick={this.handleClick.bind(this)}
                  type="button"
                  className="ui button"
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      ),
      email: ""
    };
  }
  handleClick() {
    event.preventDefault();
    this.setState({
      componant: <Signup />
    });
  }
  loginFun() {
    event.preventDefault();
    var data = {
      email: $("#email").val(),
      password: $("#password").val()
    };
    var that = this;
    $.ajax({
      url: "/login",
      type: "POST",
      data: data,
      datatype: "json",
      success: function(res) {
        localStorage.setItem("usertoken", res);
        const decoded = jwt_decode(res);
        that.setState({
          email: decoded.password
        });
      }
    });
  }
  getUser() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    console.log(decoded.email);
    if (decoded.password === this.state.email) {
      window.open("http://localhost:3003/", "_self");
    } else {
      alert("Wrong password or email");
    }
  }

  render() {
    return this.state.componant;
  }
}
export default Login;
