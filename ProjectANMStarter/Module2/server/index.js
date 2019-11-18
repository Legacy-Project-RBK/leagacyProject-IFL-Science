const express = require('express');
const bodyParser = require('body-parser');
const db = require('../Database/index.js')
let app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/src/dist'));

// const Content = require('../Database/index.js');

app.get('/story', function (req, res) {
  db.Content
        .find({})
        .limit(5)
        .sort({shares: -1})
        .exec((err,data) => { 
      if(err){
        console.log(err);
        req.send()
      }
      res.json(data);
    })  
});

// app.get("/save",(req,res)=>{
//   db.save()
//   res.send("saveed")
// })

// app.get("*",(req,res)=>{
//   app.use(express.static(__dirname + '/../client/src/dist'));
// })



const port = process.env.PORT || 4000; //this is for heruko ()

// app.listen(process.env.PORT || 4000)
app.listen(port, function() {
  console.log(`we rock on port ${port}`);
});