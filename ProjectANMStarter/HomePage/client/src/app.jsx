import Slider from "./components/Slider.jsx";
import ReactDOM from "react-dom";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Slider/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("homePage"));
