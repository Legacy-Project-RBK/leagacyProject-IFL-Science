import React from "react";
import ReactDom from "react-dom";

class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("nour", this.props.story);
    //var url = "http://localhost:7000/?id=" + this.props.story._id;
    var url ="https://murmuring-shelf-31236.herokuapp.com/?id=";
    return (
      <div className="postspace">
        <a href={url}>
          <img className="imagewrap" src={this.props.story.image} />
        </a>
        {/*image div*/}
        <div className="post-content">
          <h4 className="title">{this.props.story.title}</h4> {/*title div*/}
        </div>
      </div>
    );
  }
}

export default Article;
