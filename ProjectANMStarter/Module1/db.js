const mongoose = require("mongoose");
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
  date: { type: String }
});

const ContentSchema = Schema({
  title: { type: String },
  image: { type: String },
  description: { type: String },
  Auther: { type: String },
  ImgAuther: { type: String },
  date: { type: Date },
  shares: { type: Number }
});

const Comment = mongoose.model("Comment", CommentSchema);
const Content = mongoose.model("Content", ContentSchema);

let save = article => {
  var content = new Content({
    title: article.title,
    image: article.image,
    description: article.description,
    Auther: article.Auther,
    ImgAuther: article.ImgAuther,
    date: article.date,
    shares: article.shares
  });
  content.save();
};

module.exports = { Comment, save, Content };
