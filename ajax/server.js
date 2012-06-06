// Modified from http://howtonode.org/hello-node
// To run:
//   $ node server.js
//   $ open http://localhost:8000

// Load the http module to create an http server.
var http = require('http'),
  fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function(request, response){
  console.log(request.url);

  if (request.url === '/data.json'){
    // serve the JSON data
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end('{ "message": "Hello World" }');
  } else {
    // serve the HTML page
    var stream = fs.createReadStream('ajax.html');
    stream.pipe(response);
  }
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
