import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Conversation from './components/Conversation.jsx';
import AddComment from './components/AddComment.jsx';
import CommentsList from './components/CommentsList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
        this.retrieveData();
        this.updateState = this.updateState.bind(this);
    }

    updateState(data) {
        this.setState({
            comments: data
        })
    }

    retrieveData() {
        var that = this;
        $.ajax({
            url: "/comments",
            method: "GET",
            success: function(data) {
                that.updateState(data)
            },
            error: function(error) {
                console.log(error)
            }
        })
    }

    add(comment) {
        var that = this;
        console.log(`${comment} was added`);
        $.ajax({
            url: "/comments",
            type: "POST",
            data: { 
                idContent: "",
                username:"anonymous",
                text: comment, 
                likes: 0,
                date: new Date(Date.now()) 
            },
            dataType: "application/json",
            success: function() {
                that.retrieveData();    
            }
        }) 
    }
    render(){
        return(<div className="comments-wrap">
            {/* <h1>Hello from Module3</h1> */}
            {/* <Conversation /> */}
            <AddComment onAdd={this.add.bind(this)} comments={this.state.comments}/> 
            <CommentsList comments={this.state.comments}/>
      </div> ) 
    }
}
ReactDOM.render(<App />, document.getElementById("comments"))

//diab