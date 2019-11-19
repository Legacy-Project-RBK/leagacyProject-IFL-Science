import ReactDOM from "react-dom";
import React from "react";

class Catagories extends React.Component {
  render() {
    return (
      <header className="container">
        <div className="inner">
          <a className="logo" href="https://www.iflscience.com/">
            <img
              src="https://cdn.iflscience.com/assets/site/img/iflscience_logo.png?v=1.3.5"
              alt="IFLScience logo"
              className="main-logo"
            />
            <img
              src="https://cdn.iflscience.com/assets/site/img/iflscience_logo_narrow.png?v=1.3.5"
              alt="IFLScience logo"
              class="alt-logo"
            />
          </a>
          <div className="shownav">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="social">
            <li className="store">
              <a
                href="https://goo.gl/Ww7iWa"
                target="_blank"
                title="Visit the I love Science Store"
              >
                <img
                  src="https://cdn.iflscience.com/assets/site/img/ilss-logo.png?v=1.3.5"
                  alt="I Love Science Store"
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
              </a>
            </li>
            <li className="twitter">
              <a
                href="https://twitter.com/IFLScience"
                target="_blank"
                title="IFLScience on Twitter"
              >
                <i className="ion-social-twitter"></i>
              </a>
            </li>

            <li className="instagram">
              <a
                href="https://www.instagram.com/iflscience/"
                target="_blank"
                title="IFLScience on Instagram"
              ></a>
            </li>

            <li className="youtube">
              <a
                href="https://www.youtube.com/IFLScienceOfficial"
                target="_blank"
                title="IFLScience on Youtube"
              ></a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
export default Catagories;
