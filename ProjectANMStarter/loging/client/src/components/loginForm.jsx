import ReactDOM from "react-dom";
import React from "react";
import $ from "jquery";
class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  saveData() {
    event.preventDefault();
    console.log("heloooo from save");
    var data = {
      userName: $("#name").val(),
      email: $("#email").val(),
      password: $("#password").val()
    };
    console.log(data);
    $.ajax({
      url: "/signup",
      type: "POST",
      data: data,
      datatype: "json"
    });
  }
  render() {
    return (
      <div>
        {" "}
        <div style={{ textAlign: "center" }}>
          <img
            className="logo"
            src="https://previews.123rf.com/images/tanyastock/tanyastock1609/tanyastock160901582/62841748-user-icon-human-person-symbol-avatar-login-sign-blue-circle-button-with-flat-web-icon-vector.jpg"
          ></img>
          <h2>IFLscience Login-Signup</h2>
          <p className="join">New to IFL Science? Join</p>
        </div>
        <div className="auth">
          <form onSubmit={this.saveData.bind(this)} className="ui form">
            <div className="field">
              <label className="em">Email</label>
              <span class="required">*</span>
              <input id="email" placeholder="email" />
            </div>

            <div className="field">
              <label className="pass">Password</label>
              <span class="required">*</span>
              <input type="password" id="password" placeholder="password" />
            </div>
            <div>
              <button type="submit" className="ui button">
                Login
              </button>
              <span className="choose">or</span>
              <button type="submit" className="ui button">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
