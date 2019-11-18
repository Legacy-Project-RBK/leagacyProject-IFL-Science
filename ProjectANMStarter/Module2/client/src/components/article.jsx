import React from 'react'; 
import ReactDom from 'react-dom';


  class Article extends React.Component {
    constructor (props) {
      super(props);
    }
    render(){
      console.log("nour",this.props.story)
      return(
       
            <div className="postspace"> 
                <img className="imagewrap" src={this.props.story.image} /> {/*image div*/}
                <div className="post-content">
                <h4 className="title">{this.props.story.title}</h4> {/*title div*/} <a href="#"></a>
                </div>
            </div>
      )
    }
  }

  export default Article;