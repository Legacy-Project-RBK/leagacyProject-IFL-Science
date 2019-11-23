const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URI =
  "mongodb+srv://maysqunaibi:123456789rbk@cluster0-mbxj6.mongodb.net/legacyContents?retryWrites=true&w=majority"; //path?

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }); //, useMongoClient: true

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("We're Connected!");
});

const CommentSchema = Schema({
  idContent: {type: String}, //this is a foreign key for the article
  username : {type: String},
  text: { type: String },
  likes: { type: Number },
  date: { type: Date }
});

// const ContentSchema = Schema({
//   title: {type: String},
//   text: {type: String},
//   description: {type: String},
//   Auther: {type: String},
//   ImgAuther: {type: String},
//   shares: {type: Number},
//   likes: {type: Number}
// })

const Comment = mongoose.model("Comment", CommentSchema);
// const Content = mongoose.model('Content', ContentSchema);

// let saveContent = (/* TODO */) => {
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
//   var con =new  Content({
//     title:"t"
//   })
// con.save()
// }

let saveComment = comment => {
  var com = new Comment({
    idContent: comment.idContent,
    username:comment.username,
    text: comment.text,
    likes: comment.likes,
    date: comment.date //needs to be fixed
  });
  // com.save(); 
  com.save();
};



module.exports = { Comment, saveComment };
