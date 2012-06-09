var fs = require('fs');

var template = fs.readFileSync('index.html.ejs');

var dir = 'examples/',
  allFiles = fs.readdirSync(dir);

var files = [
  'array_as_object.js',
  'pass_by_reference.js',
  'self_executing_functions.js', // re-referenced in modules

  'this.js',
  'apply_context.js',
  'call_vs_apply.js',

  'arguments.js',
  'extend.js',

  'event_loop.js',
  'callbacks.js',


  'object_literal.js',
  'oop_basic.js',
  'instance_vs_prototype.js',
  
  'object_prototype.js', // jump back to array_as_object
  
  'oop_inheritance.js',
  'namespace.js',
  'namespace_exercise.js',

  'oop_private.js', // related to modules

  'singleton.js',
  'module.js',


  // day 2


  'class_vs_instance_methods.js',
  'hoisting.js',
  'bind.js'
];

var slides = files.map(function(file){
  // remove from list of allFiles
  var i = allFiles.indexOf(file);
  if (i > -1) allFiles.splice(i, 1);

  var code = fs.readFileSync(dir + file);
  return '<dt>' + file + '</dt>\n<dd><pre>' + code + '</pre></dd>\n';
}).join('');

if (allFiles.length) console.warn('UNUSED FILES:\n' + allFiles.join('\n') + '\n');

var output = template.toString().replace(/<%=\s*examples\s*%>/, slides);
fs.writeFileSync('index.html', output);
console.log("wrote to index.html");
