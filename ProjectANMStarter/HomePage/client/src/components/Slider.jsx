//import $ from "jquery";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

//import ReactDOM from 'react-dom';
import React, { Component } from "react";

import Slider from "react-slick";
function Arrows(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

 class Slider1 extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow: <Arrows />,
      prevArrow: <Arrows />
    };
    return (
      <div>
        <div>
          <h2>Home Page</h2>
        </div>
        <div id="mainDiv">
        <Slider {...settings}>
          <div className="subDivs">
            <a href="http://localhost:3000/?id=5dd433953c5f386ae10f509a">
              <img src="https://cdn.iflscience.com/images/05184fed-1e62-56de-a8e5-8568b2e2d202/extra_large-1573226923-cover-image.jpg"></img>
              <h3>Dinosaurs Lived On The Other Side Of The Galaxy, NASA Astrophysicist Demonstrates</h3>
            </a>
          </div>
          <div className="subDivs">
            <a href="http://localhost:3000/?id=5dd4340194f5f46b0111e438">
              <img src="https://cdn.iflscience.com/images/12430979-3d2f-56d6-8c67-b6fa94575368/extra_large-1573051766-cover-image.jpg"></img>
              <h3>Watch The Severed Head Of A Wolffish Bite</h3> <h3> Down On A Can Of Coke</h3>
            </a>
          </div>
          <div className="subDivs">
            <a href="http://localhost:3000/?id=5dd433287df3056ab529ccf4">
              <img src="https://cdn.iflscience.com/images/31eddec3-96cc-5f6e-9a20-0333aae7dbaa/extra_large-1572889543-cover-image.jpg"></img>
              <h3>Nearly A Million Cannibalistic Ants Trapped In Polish Weapon Bunker Make Long-Anticipated Escape</h3>
            </a>
          </div>
          <div className="subDivs">
            <a href="http://localhost:3000/?id=5dd4325a0f1b8c6a88ecc02d">
              <img src="https://cdn.iflscience.com/images/39ca5314-9372-5720-a03d-fc2a54741b9a/extra_large-1572974929-cover-image.jpg"></img>
              <h3>Scientists Confirm The Discovery Of A Mysterious </h3> <h3> Interstellar Space Boundary</h3>
            </a>
          </div>
          <div className="subDivs">
            <a href="http://localhost:3000/?id=5dd4345a99d0756b265a27ed">
              <img src="https://cdn.iflscience.com/images/2c3e17c8-e607-54cb-907e-4054900d38da/extra_large-1573734829-cover-image.jpg"></img>
              <h3>Astronomers Now Know How Buckyballs Form In Space</h3>
            </a>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}
export default Slider1;