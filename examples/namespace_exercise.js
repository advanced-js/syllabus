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

// Level 1: Make it work for namespaces
//   of a certain length, e.g.
//   'app.models' and 'foo.lib'.
// 
// Level 2: Make it work for namespaces
//   of arbitrary length.
// 
// Level 3: If some level of the namespace
//   already exists, don't override it, e.g.
//   
//   namespace('app.models');
//   app.models.View = function(){};
//   
//   namespace('app.views');
//   app.models.View; // should not raise an error

// start here: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/split
