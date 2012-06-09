// EXERCISE: write a namespace() function that takes a period-delimited
// string of arbitrary length and makes that namespace available globally,
// without squashing any that were previously-defined.  For example:

function namespace(path){
  // ...
}

namespace('app.models');
// app.models.User = function(){};

namespace('app.views');
// assert(typeof app.models.User === 'function', "app.models.User should still be available");

namespace('foo.lib.external');

// start here: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String
