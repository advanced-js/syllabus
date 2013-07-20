var fs = require('fs'),
  u = require('./vendor/underscore');

var template = u.template(fs.readFileSync('index.html.ejs').toString());

var dir = 'examples/',
  allFiles = fs.readdirSync(dir);

var files = [
  // pass by value/reference
  'array_as_object.js',
  'object_literal.js',
  'pass_by_reference.js',

  // arguments
  'arguments.js',
  'echo_exercise.js',
  'extend.js',

  // async
  'countdown_exercise.js',
  'event_loop.js',
  'callbacks.js',

  // variable scope
  'self_executing_functions.js', // re-referenced in modules

  // context
  'this.js',
  'apply_context.js',
  'call_vs_apply.js',
  'bind.js',

  // OOP
  'oop_basic.js',
  'instance_vs_prototype.js',
  'object_prototype.js', // jump back to array_as_object
  'oop_inheritance.js',
  'namespace.js',
  'namespace_exercise.js',
  'oop_private.js', // related to modules

  // other design patterns
  'singleton.js',
  'module.js', // jump back to self_executing_functions and oop_private
  'class_vs_instance_methods.js',

  'hoisting.js'
];

var slides = files.map(function(file){
  var code = fs.readFileSync(dir + file);
  return { file: file, code: code };
});

var unused = u.difference(allFiles, files);
if (unused.length) console.warn('UNUSED FILES:\n' + unused.join('\n') + '\n');

var output = template({ slides: slides });
fs.writeFileSync('index.html', output);
console.log("wrote to index.html");
