// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
    var path = req.url;

    switch (path) {
        case "/":
            return fs.readFile(__dirname + "/index.html", function(err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
            break;
        case "/foods":
            return fs.readFile(__dirname + "/foods.html", function(err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
            break;
        case "/movies":
            return fs.readFile(__dirname + "/movies.html", function(err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
            break;
        case "/css":
            return fs.readFile(__dirname + "/css.html", function(err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
            break;
        default:
            return fs.readFile(__dirname + "/index.html", function(err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
            break;
    } 
}

// Starts our server
server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});