const faker = require("faker");
const save = require("../Database/index.js").save;
const Content = require("../Database/index.js").Content;
//declare function and call the save function from the database
var fakeSave = function() {
  for (var i = 0; i <= 50; i++) {
    var con = new Content({
      //generate data from faker
      title: faker.random.words(10),
      image: faker.image.image(),
      description: faker.random.words(100),
      Author: faker.name.firstName(),
      ImgAuther: faker.image.people(),
      date: faker.date.future(),
      shares: faker.random.number()
    });
    save(con); //save function in database
  }
};

//fakeSave();
