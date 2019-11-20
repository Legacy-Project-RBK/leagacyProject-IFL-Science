import ReactDOM from "react-dom";
import React from "react";
import Catagories from "./components/cat.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Catagories />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("header"));
