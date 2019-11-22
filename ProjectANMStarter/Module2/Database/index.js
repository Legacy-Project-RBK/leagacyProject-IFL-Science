const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const URI =
  "mongodb+srv://maysqunaibi:123456789rbk@cluster0-mbxj6.mongodb.net/legacyContents?retryWrites=true&w=majority"; //path?
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }); //, useMongoClient: true

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("We're Connected!");
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

const Content = mongoose.model("Content", ContentSchema);

// let save = article => {
//   var content = new Content({
//     title: "Astronomers Now Know How Buckyballs Form In Space",
//     image:
//       "https://cdn.iflscience.com/images/2c3e17c8-e607-54cb-907e-4054900d38da/extra_large-1573734829-cover-image.jpg",
//     description:
//       'Without contest, the best name in chemistry is Buckminsterfullerene. These are complex-carbon molecules shaped like a soccer ball and for this reason, are also known as "buckyballs". These molecules have been unexpectedly discovered in space and astronomers have finally worked out how they might form in the nebulae around dying stars.  As reported in The Astrophysical Journal Letters, the team tried to recreate conditions found in circumstellar space. They used an instrument called the transmission electron microscope (TEM) that can simulate planetary nebulae conditions well and looked at what happened to a common type of stardust found there.  This stardust is made mostly of silicon carbide. The researchers placed the silicon carbide molecules in the TEM and then hit them with shockwaves, high-energy particles, and high temperatures. They discovered that eventually the silicon is pushed aside, leaving many carbon atoms interacting among themselves.  While these atoms are in these extreme hydrogen clouds, they can arrange themselves into complex patterns. Buckminsterfullerene molecules are very sturdy and very stable even in high-radiation environments. They can survive the harsh conditions around a dying star for a long time until they eventually escape into interstellar space.',
//     Auther: "By Alfredo Carpineti",
//     ImgAuther:
//       "https://cdn.iflscience.com/images/2c71dbf8-f2ea-5a37-bd71-073bc362a79b/author_large-author.jpg",
//     date: "2019-11-13T22:00:00.000Z",
//     shares: 20
//   });
//   content.save();
// };
// save();

module.exports = {  Content };
