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
    dbo.collection("signedUp").insertOne(myDetails, function (err, res) {
      if (err) throw err;
      console.log("Added to database");
      db.close();
    });
  });
  res.end();
});

app.post("/signIn", function (req, res) {
  var email = req.body.email;
  var password = req.body.pswd;
  console.log(email + password);
  res.end();
});

app.listen(8080, () => {
  console.log(`Server listening on 8080`);
});
