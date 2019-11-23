const express = require("./node_modules/express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("./db.js");

app.use(express.static(__dirname + "/client/dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
var port = process.env.PORT || 3001;
process.env.SECRET_KEY = "secret";

app.post("/signup", (req, res) => {
  var body = req.body;
  const userData = {
    userName: body.userName,
    email: body.email,
    password: body.password
  };
  // console.log(userData);
  db.Signup.findOne({
    email: body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(body.password, 10, (err, hash) => {
          userData.password = hash;
          db.Signup.create(userData).then(user => {
            res.json({ status: user.email + " sresgisterd" }).catch(err => {
              res.send("error" + err);
            });
          });
        });
      } else {
        res.send({ error: "User already exists" });
      }
    })
    .catch(err => {
      res.send("error" + err);
    });
});

app.post("/login", (req, res) => {
  db.Signup.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            userName: user.userName,
            email: user.email,
            password: user.password
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "1h"
          });
          res.send(token);
        } else {
          res.json({ error: "wrong password " });
        }
      } else {
        res.json({ error: "user  not exist" });
      }
    })
    .catch("error");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
