var fs = require('fs');

var template = fs.readFileSync('index.html.ejs');

var dir = 'exercises/',
  files = fs.readdirSync(dir);

var slides = files.map(function(file){
  var code = fs.readFileSync(dir + file);
  return '<dt></dt>\n<dd><pre>' + code + '</pre></dd>\n';
}).join('');

// console.log(template);
var output = template.toString().replace(/<%=\s*examples\s*%>/, slides);
fs.writeFileSync('index.html', output);
