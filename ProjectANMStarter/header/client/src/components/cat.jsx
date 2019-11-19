import ReactDOM from "react-dom";
import React from "react";

class Catagories extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <ul className="item1">
          <a className="logo" href="https://www.iflscience.com/">
            <img
              src="https://cdn.iflscience.com/assets/site/img/iflscience_logo.png?v=1.3.5"
              alt="IFLScience logo"
              className="main-logo"
              style={{ width: "auto", height: "auto" }}
            />
          </a>
          <div className="shownav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </ul>
        <ul className=" social item2">
          <li className="store">
            <a
              href="https://goo.gl/Ww7iWa"
              target="_blank"
              title="Visit the I love Science Store"
            >
              <img
                src="https://cdn.iflscience.com/assets/site/img/ilss-logo.png?v=1.3.5"
                alt="I Love Science Store"
                className="sto"
              />
            </a>{" "}
          </li>
          <li className="facebook">
            <a
              href="https://www.facebook.com/IFeakingLoveScience"
              target="_blank"
              title="IFLScience on Facebook"
            >
              <i className="ion-social-facebook"></i>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
                className="fac"
              />
            </a>
          </li>
          <li className="twitter">
            <a
              href="https://twitter.com/IFLScience"
              target="_blank"
              title="IFLScience on Twitter"
            >
              <i className="ion-social-twitter"></i>
              <img
                src="https://www.metricmetal.com/wp-content/uploads/2017/09/twitter-logo-clipart-free-20.jpg"
                className="twitt"
              />
            </a>
          </li>
          <li className="instagram">
            <a
              href="https://www.instagram.com/iflscience/"
              target="_blank"
              title="IFLScience on Instagram"
            >
              <img
                src="https://www.freepnglogos.com/uploads/best-instagram-logo-download-here-15.png"
                className="insta"
              />
            </a>
          </li>
          <li className="youtube">
            <a
              href="https://www.youtube.com/IFLScienceOfficial"
              target="_blank"
              title="IFLScience on Youtube"
            >
              <img
                src="https://marketingland.com/wp-content/ml-loads/2014/08/youtube-logo-1920-800x450.jpg"
                className="you"
              />
            </a>
          </li>
        </ul>

        <ul className="nav item3">
          <li>
            <a href="https://www.iflscience.com/environment/">
              <img
                src="https://cdn.iflscience.com/assets/site/img/icon-environment.png?v=1.3.5"
                alt="Environment"
                className="env"
              />
            </a>
          </li>
          <li>
            <a href="https://www.iflscience.com/technology/">
              <img
                src="https://cdn.iflscience.com/assets/site/img/icon-technology.png?v=1.3.5"
                alt="Technology"
                className="tec"
              />
            </a>
          </li>
          <li>
            <a href="https://www.iflscience.com/space/">
              <img
                src="https://cdn.iflscience.com/assets/site/img/icon-space.png?v=1.3.5"
                alt="Space"
                className="space"
              />
            </a>
          </li>
          <li>
            <a href="https://www.iflscience.com/health-and-medicine/">
              <img
                src="https://cdn.iflscience.com/assets/site/img/icon-health-and-medicine.png?v=1.3.5"
                alt="Health and Medicine"
                className="hm"
              />
            </a>
          </li>
          <li>
            <a href="https://www.iflscience.com/brain/">
              <img
                src="https://cdn.iflscience.com/assets/site/img/icon-the-brain.png?v=1.3.5"
                alt="The Brain"
                className="brain"
              />
            </a>
          </li>
          <li>
            <a href="https://www.iflscience.com/plants-and-animals/">
              <img
                src="https://cdn.iflscience.com/assets/site/img/icon-plants-and-animals.png?v=1.3.5"
                alt="Plants and Animals"
                className="pa"
              />
            </a>
          </li>
          <li>
            <a href="https://www.iflscience.com/physics/">
              <img
                src="https://cdn.iflscience.com/assets/site/img/icon-physics.png?v=1.3.5"
                alt="Physics"
                className="ph"
              />
            </a>
          </li>
          <li>
            <a href="https://www.iflscience.com/chemistry/">
              <img
                src="https://cdn.iflscience.com/assets/site/img/icon-chemistry.png?v=1.3.5"
                alt="Chemistry"
                className="che"
              />
            </a>
          </li>
          <li>
            <a href="https://www.iflscience.com/policy/">
              <img
                src="https://cdn.iflscience.com/assets/site/img/icon-policy.png?v=1.3.5"
                alt="Policy"
                className="pol"
              />
            </a>
          </li>
          <li>
            <a href="https://www.iflscience.com/editors-blog/">
              <img
                src="https://cdn.iflscience.com/assets/site/img/icon-editors-blog.png?v=1.3.5"
                alt="Editor's Blog"
                className="eb"
              />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Catagories;
