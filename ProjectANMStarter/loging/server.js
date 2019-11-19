const express = require("./node_modules/express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("./db.js");

app.use(express.static(__dirname + "/client/dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
var port = process.env.PORT || 3001;
process.env.SECRET_KEY = "secret";

// app.get("/me", function(req, res) {
//   var token = req.headers["x-access-token"];
//   if (!token)
//     res.status(401).send({ auth: false, message: "No token provided." });

//   jwt.verify(token, config.secret, function(err, decoded) {
//     if (err)
//       res
//         .status(500)
//         .send({ auth: false, message: "Failed to authenticate token." });

//     res.status(200).send(decoded);
//   });
// });
app.post("/signup", (req, res) => {
  const today = new Date();
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    created: today
  };
  db.Signup.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user.email) {
        console.log(user);
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          db.Signup.create(userData).then(user => {
            res.json({ status: user.email + "registered!" }).catch(err => {
              res.send("error" + err);
            });
          });
        });
      } else {
        res.json({ error: "User already exists" });
      }
    })
    .catch(err => {
      res.send("error" + err);
    });
});

app.post("/login", (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password)) {
          const payload = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.send(tpken);
        } else {
          res.json({ error: "user does not exist" });
        }
      } else {
        res.json({ error: "user does not exist" });
      }
    })
    .catch("error" + err);
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
