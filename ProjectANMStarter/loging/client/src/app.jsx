import Signup from "./components/signupform.jsx";
import Login from "./components/loginForm.jsx";
import ReactDOM from "react-dom";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("logging"));
