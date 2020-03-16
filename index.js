var express = require("express");
var app = express();
var bodyParser = require('body-parser')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))


var cats = require('./cats.js')(app)  //passing the app to cats

const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  //bunch of properties available to analyse the nature of the request
  // res.send('hello world')
  res.json({ me: "hello", you: "goodbye" });
});

app.listen(port, () => console.log(`listening on port ${port}`));


















// STANDARD NODE
// var http = require('http');

// http.createServer(function(req,res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.end('Hello World\n')
// }).listen(3000, '127.0.0.1') //local host

// console.log('server is running at http://127.0.0.1:3000/')
