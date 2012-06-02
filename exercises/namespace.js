// like Java, but hackier!

var app = {};
app.models = {};
app.models.User = function(){};
app.models.Vehicle = function(){};

var bob = new app.models.User();

assert(bob instanceof Object, "Objects under a namespace are just Objects");

// perks:
// * helps to organize
// * doesn't crowd the global namespace

// TASK: write a namespace() function that takes a period-delimited string, e.g.
//   namespace('app.models');
