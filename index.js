const { log } = require("console");
const fs = require("fs");
let fileData;
let jsondata;
fs.readFile("index.html", "utf-8", (err, data) => {
  fileData = data;
});
fs.readFile("data.json", "utf-8", (err, data) => {
  jsondata = data;
});

console.log("i want to check");

const http = require("http");

let server = http.createServer((req, res) => {
  console.log(req.method);
  switch (req.url) {
    case "/": {
      res.setHeader("name", "chandan");
      res.setHeader("Content-Type", "text/html");
      res.statusCode = 200;
      res.end(fileData);
      break;
    }
    case "/product": {
      res.setHeader("name", "chandan");
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(jsondata);
    }
  }
});

server.listen(8000);
