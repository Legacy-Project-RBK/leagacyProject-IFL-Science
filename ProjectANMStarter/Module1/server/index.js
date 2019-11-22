const app = require("./app.js");

const port = process.env.PORT || 3000; //this is for heruko ()

// app.listen(process.env.PORT || 3000)
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
