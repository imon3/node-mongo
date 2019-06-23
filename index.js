const path = require("path");
const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "contact.html"));
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
