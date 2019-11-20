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
        <form
          onSubmit={this.saveData.bind(this)}
          className="ui form"
          style={{ width: "100px", height: "10px" }}
        >
          <div className="field">
            <label>User Name</label>
            <input
              id="name"
              style={{ width: "140px", height: "5px" }}
              placeholder="User Name"
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              id="email"
              style={{ width: "140px", height: "5px" }}
              placeholder="email"
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              id="password"
              style={{ width: "140px", height: "5px" }}
              placeholder="password"
            />
          </div>
          <button type="submit" className="ui button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Signup;
