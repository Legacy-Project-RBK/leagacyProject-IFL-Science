
var express = require('express'); 
var request = require('request'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var app = express();
const db = require('./db.js')
const Content = require('./db.js').Content;
app.use(express.static(__dirname + '/'));


app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
//Comments config
const Comment = require('./db.js').Comment; //require the schema in database

app.get('/comments',  (req, res) => {
  // res.send('Helo World from server 3');
  Comment.find({})
    .sort({ date: -1 })
    .then(comments => res.json(comments))
    // .catch(err => console.log(err))

});

// app.post('/shares', function (req, res) {
//   console.log("sucees post increaments shares")
//   const id = req.body.user_id;
//   // db.Content.update(  { _id:id} , { $set: { 'shares' : shares + 1  } } );

//  db.Content.update(
//     {_id: id},
//     {$inc: {"shares": 1}}
//   );
// }
// )


app.post('/comments', (req, res) => {
  const newComment = Comment({
    text: req.body.text,
    likes: req.body.likes,
    date: req.body.date
  }) 
  
  newComment.save()
    .then(comment => res.json(comment))
    .catch(err => console.log(err))
})

//Content config
app.get('/content', function (req, res) {
  console.log(req.query, "reeeeeqqqqq")
  var n = req.query._id;
  console.log("get data from server");
  Content.findOne({_id: n}).exec((err,content) => { 
      if(err){
        console.log(err);
        //req.send();
      }
      res.json(content)});
});

app.get('/story', function (req, res) {
  db.Content
        .find({})
        .limit(5)
        //.sort({shares: -1})
        .exec((err,data) => { 
      if(err){
        console.log(err);
        req.send()
      }
      res.json(data);
    })  
});

  app.listen(process.env.PORT || 7000); 
console.log('Server running on port %d', 7000);

