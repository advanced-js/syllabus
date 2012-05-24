var fs = require('fs'),
  vm = require('vm');

var context = {
  assert: function(condition, message){
    message = message ? (' - ' + message) : '';
    if (condition){
      console.log('PASSED' + message);
    } else {
      console.error('FAILED' + message);
    }
  }
};

var dir = 'exercises/',
  files = fs.readdirSync(dir);

files.forEach(function(filename){
  console.log(filename + '\n------------------');
  var code = fs.readFileSync(dir + filename);
  try {
    vm.runInNewContext(code, context);
  } catch (e){
    console.error('ERROR - ' + e.message);
  }
  console.log('');
});

