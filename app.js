var express = require("express");
var mysql = require("mysql");

var app = express();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "test",
});

connection.connect(function (error) {
  if (!!error) {
    console.log("Error");
  } else {
    console.log("connected");
  }
});

app.get("/home", function (req, res) {
  //About mysql
  connection.query("SELECT * FROM resgistration", function (
    error,
    rows,
    fields
  ) {
    if (!!error) {
      console.log("Error in the query");
    } else {
      console.log("rows", rows);
      //console.log("fields", fields);
      console.log("Success Query");
    }
  });
});

app.listen(3000, function () {
  console.log("You are connected to 3000");
});
