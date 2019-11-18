import React from 'react'; 
import ReactDom from 'react-dom';
import Article from './article.jsx'



  class ArticlesList extends React.Component {
    constructor (props) {
      super(props);
    }
    render() {
      console.log(this.props);
      var sotries = [];
      if(Array.isArray(this.props.stories)){
         sotries = this.props.stories;
      }
    return(
      <div> 
      {sotries.map((story)  =>
         (<Article  key={story._id} story={story} />))}


      {/* // <div>                              
      //     <li className="post space">
      //     <img className="imagewrap" src = {this.props.image}/>
      //     <div className="post-content">
      //     <h4 className="title">{this.props.title}</h4>
      //     </div>
      //     </li></div>
      */}
       </div>
      )
    }
  }

  export default ArticlesList;

  
  // {props.comments.map(comment => {
  //   return <div key={comment._id}>{comment.text}</div>
  //   } )}

  //   {this.props.stories.map((story,key)  =>
  //     return(<Article  key={key} story={story} />
  //     )
  //  )



// //   })
// // )
  // <div className= widget>
  //   <ul className="postlist" id="popularStories">
  //     <div>
  //      <li className="post space">
  //      <a className="imagewrap" ">
  //      <img {this.props.image}/>
  //      </a>
  //      <div className="post-content">
  //      <h4 className="title">{this.props.title}</h4>
  //       </div>
  //      </li>
  //     </div>
 

// // {/* 
// //  */}