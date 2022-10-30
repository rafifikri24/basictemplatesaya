var http = require("http");
var fs = require("fs");
var express = require('express');

var app = express();
// function css(request, response) {
//     if (request.url === "/style.css") {
//         response.writeHead(200, { "Content-type": "text/css" });
//         var fileContents = fs.readFileSync("./style.css", { encoding: "utf8" });
//         response.write(fileContents);
//         response.end();
//     }
// }

var renderPublic = fs.readFileSync("./dox.html")

app.use(express.static('public'));
var server = http.createServer(function (request, response) {
    //css(request, response);
    response.writeHead(200, { "Content-Type": "text/html" });
    if (request.url == '/'){
        response.write(renderPublic);
    }
    response.end()
});
server.listen(3000);
console.log("server berjalan lancar")