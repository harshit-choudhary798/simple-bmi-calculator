var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
      var weight=parseFloat(req.body.weight);
      var height=parseFloat(req.body.height);
      var BMI=weight/(height*height);
      res.send("yOUR BMI IS"+BMI);
});

app.listen(3000, function() {
  console.log("server running at port 3000");
});
