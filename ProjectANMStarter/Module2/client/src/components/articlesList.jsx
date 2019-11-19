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
