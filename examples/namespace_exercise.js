// EXERCISE: write a namespace() function that takes a period-delimited
// string of arbitrary length and makes that namespace available globally,
// without squashing any that were previously-defined.  For example:

function namespace(path){
  // ...
}

namespace('app.models');
// app.models.User = function(){};

namespace('app.views');
// app.views.User = function(){};
// assert(app.models.User !== app.views.User, "different namespaces don't override each other");

namespace('foo.lib.external');
// is synonymous to:
//   
//   var foo = {};
//   foo.lib = {};
//   foo.lib.external = {};

// start here: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/split
