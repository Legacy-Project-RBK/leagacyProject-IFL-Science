import ReactDOM from "react-dom";
import React from "react";

import $ from "jquery";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   contents: []
    // };
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
        <h2 style={{ textAlign: "center" }}>IFLscience Login-Signup</h2>
        <div className="auth">
          <form onSubmit={this.saveData.bind(this)} className="ui form">
            <div className="field">
              <label className="user">User Name</label>
              <span class="required">*</span>
              <input id="name" placeholder="User Name" />
            </div>

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

            <button type="submit" className="ui button">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Signup;
