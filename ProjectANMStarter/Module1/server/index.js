const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('../db.js')
let app = express();

app.use(bodyParser.json()); 
app.use(express.static(__dirname + '/../client/src/dist'));
const Content = require('../db.js').Content;

app.post('/shares', function (req, res) {
    console.log("sucees post increaments shares")
    const id = req.body.user_id;
    // db.Content.update(  { _id:id} , { $set: { 'shares' : shares + 1  } } );

   db.Content.update(
      {_id: id},
      {$inc: {"shares": 1}}
    );
  }
)

app.get('/content', function (req, res) {
  // console.log("contentcour")
  console.log("get datat from server");
  Content.find({}).exec((err,content) => { 
      if(err){
        console.log(err);
        req.send()
      }
      res.json(content)});
});

app.get("/save",(req,res)=>{
  db.save()
  res.send("saveed")
})

app.get("*",(req,res)=>{
  app.use(express.static(__dirname + '/../client/src/dist'));
})

const port = process.env.PORT|| 3000; //this is for heruko ()

// app.listen(process.env.PORT || 3000)
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


