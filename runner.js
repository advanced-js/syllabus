// run with `rhino runner.js exercise.js [exercise2.js ...]`

function assert(condition, message){
  message = message ? (' - ' + message) : '';
  if (condition){
    console.log('PASSED' + message);
  } else {
    console.error('FAILED' + message);
  }
}

if (typeof console === 'undefined') console = { log: print };
