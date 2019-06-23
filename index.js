const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    name: "Tom Jerry"
  });
});

app.get("/about", (req, res) => {
  res.send({
    name: "Tom Jerry"
  });
});

app.listen(3000, () => {
  console.log(`app listening on port 3000`);
});

// const http = require("http");
// const fs = require("fs");

// const aboutPage = fs.readFileSync("about.html");
// const contactPage = fs.readFileSync("contact.html");
// const homePage = fs.readFileSync("index.html");

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   if (req.url === "/about") {
//     return res.end(aboutPage);
//   } else if (req.url === "/contact") {
//     return res.end(contactPage);
//   } else if (req.url === "/") {
//     return res.end(homePage);
//   } else {
//     res.writeHead(404);
//     res.end("This Page Was Not Found");
//   }
// });

// server.listen(3000);
