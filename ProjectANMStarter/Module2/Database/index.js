const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URI = "mongodb+srv://Nour:nour@cluster0-x9aui.mongodb.net/science?retryWrites=true&w=majority"
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}); //, useMongoClient: true

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're Connected!");
});

const ContentSchema = Schema({
  title: {type: String},
  image:{type: String}, 
  description: {type: String},
  Auther: {type: String},
  ImgAuther: {type: String},
  date:{type:Date},
  shares: {type: Number}
})

const Content = mongoose.model('Content', ContentSchema);


let save = (article) => {  
  var content = new Content({
    title: article.title,
    image:article.image, 
    description: article.description,
    Auther: article.Auther,
    ImgAuther: article.ImgAuther,
    date:article.date,
    shares:article.shares
  })
  content.save();
}

module.exports={save,Content};
