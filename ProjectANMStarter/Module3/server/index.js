const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const saveComment = require('.././Database/index.js');

let app = express();

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(express.static(__dirname + '/../client/src/dist'));

const Comment = require('.././Database/index.js').Comment; //require the schema in database


app.get('/comments',  (req, res) => {
  // res.send('Helo World from server 3');
  Comment.find({})
    .sort({ date: -1 })
    .then(comments => res.json(comments))
    // .catch(err => console.log(err))

});

// app.get('/comments', function (req, res) {
//   // console.log("contentcour")
//   Comment.find({}).exec((err,comment) => { 
//       if(err){
//         console.log(err);
//         req.send()
//       }
//       res.json(comment)});
// });

// app.get("/save",(req,res)=>{
//   db.save()
//   res.send("saved")
// })

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

const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

