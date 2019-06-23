const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/about") {
    return res.end("The About Page");
  } else if (req.url === "/contact") {
    return res.end("The Contact Page");
  } else if (req.url === "/") {
    return res.end("The Home Page");
  } else {
    res.writeHead(404);
    res.end("This Page Was Not Found");
  }
});

server.listen(3000);
