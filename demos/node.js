var http = require('http');

var server = http.createServer(function (req, res) {
  console.log(req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var regex = /^\/users\/(\d+)$/;
  var match = regex.exec(req.url);
  if (match){
    res.end('user number ' + match[1]);
  } else {
    res.end('format was not correct');
  }
});

server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
