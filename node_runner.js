// to run all exercises:
//   $ node node_runner.js
//
// to run single file:
//   $ node node_runner.js exercises/my_file_name.js

var fs = require('fs'),
  path = require('path'),
  vm = require('vm');


var numPasses = 0,
  numFailures = 0;

var context = {
  assert: function(condition, message){
    message = message ? (' - ' + message) : '';
    if (condition){
      console.log('PASS' + message);
      numPasses++;
    } else {
      console.error('FAIL' + message);
      numFailures++;
    }
  },
  console: console
};

function runExercise(filename, callback){
  fs.readFile(filename, function(err, code){
    if (err) return callback(err);

    console.log(path.basename(filename) + '\n------------------');

    try {
      vm.runInNewContext(code, context);
    } catch (e){
      numFailures++;
      console.error('ERROR - ' + e.message);
    }

    console.log('');
    callback();
  });
}

function onComplete(){
  console.log('\nPassed: ' + numPasses + '  Failed: ' + numFailures);
}


var singleFile = process.argv[2];
if (singleFile){
  runExercise(singleFile, onComplete);
} else {
  var dir = 'exercises/',
    files = fs.readdirSync(dir),
    numFilesComplete = 0;

  files.forEach(function(file){
    runExercise(dir + file, function(err){
      if (err) throw err;

      numFilesComplete++;
      if (numFilesComplete === files.length){
        onComplete();
      }
    });
  });
}
