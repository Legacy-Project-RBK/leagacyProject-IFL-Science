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
            <a href="https://www.iflscience.com/physics/the-messy-path-to-cleaner-energy/">
              <img src="https://cdn.iflscience.com/images/a360cc8c-68f1-526e-86d1-11879abce732/default-1573445047-perovskite-art.jpg"></img>
              <h3>The Messy Path To Cleaner Energy</h3>
            </a>
          </div>
          <div className="subDivs">
            <a href="https://www.iflscience.com/plants-and-animals/watch-the-severed-head-of-a-wolffish-bite-down-on-a-can-of-coke/">
              <img src="https://cdn.iflscience.com/images/12430979-3d2f-56d6-8c67-b6fa94575368/extra_large-1573051766-cover-image.jpg"></img>
              <h3>Watch The Severed Head Of A Wolffish Bite</h3> <h3> Down On A Can Of Coke</h3>
            </a>
          </div>
          <div className="subDivs">
            <a href="https://www.iflscience.com/plants-and-animals/nearly-a-million-cannibalistic-ants-trapped-in-polish-weapon-bunker-make-longanticipated-escape/">
              <img src="https://cdn.iflscience.com/images/31eddec3-96cc-5f6e-9a20-0333aae7dbaa/extra_large-1572889543-cover-image.jpg"></img>
              <h3>Nearly A Million Cannibalistic Ants Trapped In Polish Weapon Bunker Make Long-Anticipated Escape</h3>
            </a>
          </div>
          <div className="subDivs">
            <a href="https://www.iflscience.com/space/scientists-confirm-the-discovery-of-a-mysterious-interstellar-space-boundary/">
              <img src="https://cdn.iflscience.com/images/39ca5314-9372-5720-a03d-fc2a54741b9a/extra_large-1572974929-cover-image.jpg"></img>
              <h3>Scientists Confirm The Discovery Of A Mysterious </h3> <h3> Interstellar Space Boundary</h3>
            </a>
          </div>
          <div className="subDivs">
            <a href="https://www.iflscience.com/space/astronomers-now-know-how-buckyballs-form-in-space/">
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