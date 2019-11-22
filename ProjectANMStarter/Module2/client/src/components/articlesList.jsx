import React from "react";
import ReactDom from "react-dom";
import Article from "./article.jsx";

class ArticlesList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    var sotries = [];
    //var urls = ["http://localhost:7000/?id=5dd4325a0f1b8c6a88ecc02d", "http://localhost:7000/?id=5dd433287df3056ab529ccf4", "http://localhost:7000/?id=5dd433953c5f386ae10f509a", "http://localhost:7000/?id=5dd4340194f5f46b0111e438", "http://localhost:7000/?id=5dd4345a99d0756b265a27ed"]
    if (Array.isArray(this.props.stories)) {
      sotries = this.props.stories;
    }
    return (
      <div>
        {sotries.map(story => (
          <Article key={story._id} story={story} />
        ))}
      </div>
    );
  }
}

export default ArticlesList;
