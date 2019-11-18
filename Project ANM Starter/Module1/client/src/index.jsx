import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contents:[]
            //
    }

    this.reriveData();
    this.increamentCounter =this.increamentCounter.bind(this)
    }
    updateState(data){
        this.setState({
            contents:data
        })               
    }
       increamentCounter(id){
        console.log(`${id} was searched`),
        $.ajax({
            type: "POST",
            url: "/shares",
            data:{
                user_id: id
            }, 
            datatype: "json",
            success:function(){
                console.log("success");
            },
            error: function(request, status, error) {
                  console.log("error post");
                }
          });
       }

           
      reriveData() {
        console.log("get datat from client");
        var that = this;
        $.ajax({
          type: "GET",
          url: "/content",  
          datatype: "json",
          success:function(data){
              that.updateState(data);
              console.log(data);
          },
          error: function(request, status, error) {
                console.log(error);
              }
        });
      }

      renderList() {

       const arr = this.state.contents[0];
         return (   
            <div id="content2">
            <h1>{arr.title}</h1>
            <div className="social-shares">
                <div className="share-count" id="counter_shares">{arr.shares}<span> Shares</span></div>
                    <div className="social">
                        <a className="facebook" href="#">
                            <img id="id_social" src="http://www.boldmethod.com/images/social/share-facebook-long-v2.png" onClick={this.increamentCounter(arr._id)}/>
                        </a>
                    </div>
                    <div className="social">
                        <a href="#" className="twitter">
                        <img id="id_social" src="https://images.squarespace-cdn.com/content/v1/563e2841e4b09a6ae020bd67/1530018807349-YP4LPA0C7INKN2XL0IM2/ke17ZwdGBToddI8pDm48kMJPBCPJsiaclxZdF5CWJnlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIMrHLJAYcctYfGny_wGpS1LuO2Ox8Cjc1KavDC4kMrXc/button+share+on+twitter.png" onClick={this.increamentCounter(arr._id)}/>
                        </a>
                </div>									
            </div>  
            <img id="img" src={arr.image}></img>
              <div className="author" >
                    <img id="author_img"src={arr.ImgAuther}/>
                        <h5 className="name">{arr.Auther}</h5>
                        <span className="date">{arr.date}</span>
                       </div>      	
                        <div className="article-content">
                              <p>{arr.description}</p>
                       </div>
                  </div>  
               )
           }
        render(){
            if(this.state.contents.length){
                return (
                <div>{this.renderList()}</div>
                );
            }
            else
            {
                return (
                <div>Loading...</div>
                );
            }}}
ReactDOM.render(<App />, document.getElementById("content"))
