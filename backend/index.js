var http = require("http");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
var url =
  "mongodb+srv://fikayo:fikayo@shopthrift.9j6vnut.mongodb.net/forms?retryWrites=true&w=majority";

app.post("/signUp", function (req, res) {
  var email = req.body.email;
  var fname = req.body.fname;
  var password = req.body.pswd;
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("forms");
    var myDetails = {
      name: fname,
      email: email,
      password: password
    };
    dbo
      .collection("signedUp")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        var allMails = [];
        result.map((eachOfThem) => {
          allMails.push(eachOfThem.email);
        });
        console.log(allMails);
        if (allMails.indexOf(email) === -1) {
          dbo.collection("signedUp").insertOne(myDetails, function (err, res) {
            if (err) throw err;
            console.log("new user details added");
            res.redirect("http://localhost:5501/signIn.html");
          });
        } else {
          console.log("You already have an account Sign In");
          res.redirect("http://localhost:5501/signIn.html");
        }
      });
  });
});

app.post("/signIn", function (req, res) {
  var email = req.body.email;
  var password = req.body.pswd;
  var query = { email: email, password: password };
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("forms");
    if (err) throw err;
    dbo
      .collection("signedUp")
      .find({}, { projection: { _id: 0, name: 0 } })
      .toArray(function (err, result) {
        var all = result;
        for (i = 0; i < all.length; i++) {
          if (
            query.email === all[i].email &&
            query.password === all[i].password
          ) {
            console.log("Hoooooooray");
            res.redirect("http://localhost:5501//main.html");
          } else {
            console.log("wrong email or password")
          }
        }
      });
  });
});

app.listen(8080, () => {
  console.log(`Server listening on 8080`);
});
