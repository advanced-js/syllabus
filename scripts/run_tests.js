// to run all examples:
//   $ node run_tests.js
//
// to run single file:
//   $ node run_tests.js examples/my_file_name.js

var assert = require('assert'),
  fs = require('fs'),
  path = require('path'),
  vm = require('vm');


var numPasses = 0,
  failures = [];

function logError(filename, message){
  console.error(message);
  failures.push([filename, message]);
}

function runExercise(filename){
  fs.readFile(filename, function(err, code){
    if (err) throw new Error(err);

    console.log(path.basename(filename) + '\n------------------');

    try {
      // create new context for each run
      vm.runInNewContext(code, {
        assert: function(condition, message){
          if (condition){
            console.log('PASS - ' + message);
            numPasses++;
          } else {
            logError(filename, 'FAIL - ' + message);
          }
        },
        console: console,
        deepEqual: function(obj1, obj2){
          try {
            assert.deepEqual(obj1, obj2);
            return true;
          } catch (e){
            return false;
          }
        },
        setTimeout: setTimeout
      });
    } catch (e){
      logError(filename, 'ERROR - ' + e.message);
    }

    console.log('');
  });
}


var singleFile = process.argv[2];
if (singleFile){
  runExercise(singleFile);
} else {
  var dir = 'examples/',
    files = fs.readdirSync(dir);

  files.forEach(function(file){
    runExercise(dir + file);
  });
}

process.on('exit', function(){
  var numFailures = failures.length;
  if (numFailures){
    console.log('\n\nFAILURES\n------------------');
    var failure;
    for (var i = 0; i < numFailures; i++){
      failure = failures[i];
      console.log(failure[0] + ': ' + failure[1]);
    }
  }

  console.log('\nPassed: ' + numPasses + '  Failed: ' + numFailures);
});


console.log('Building slides...');
require('./build');
console.log('SUCCESS');
