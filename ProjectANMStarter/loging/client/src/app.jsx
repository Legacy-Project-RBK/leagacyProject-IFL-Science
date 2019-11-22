import Signup from "./components/signupform.jsx";
import ReactDOM from "react-dom";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Signup />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("logging"));
