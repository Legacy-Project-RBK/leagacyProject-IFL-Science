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

const userSchema = new Schema({
  userName: { type: String },
  email: { type: String },
  password: { type: String }
});

const Signup = mongoose.model("signup", userSchema);

module.exports.Signup = Signup;
module.exports.userSchema = userSchema;
