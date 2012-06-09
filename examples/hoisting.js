var fooNotDefined = false;
try {
  log(foo);
} catch(e){
  fooNotDefined = true;
}

assert(fooNotDefined, "non-declared variables will throw errors when called");
assert(typeof foo === 'undefined', "non-declared variables have a typeof 'undefined'");

assert(bar === undefined, "variable declarations get hoisted, but not the assignment");
assert(typeof bar === 'undefined', "declared (but unset) variables *also* have typeof 'undefined'");

var bar = 'bar';


var bazNotDefined = false;
try {
  log(baz);
} catch(e){
  bazNotDefined = true;
}

assert(bazNotDefined, "hoisting only occurs within a single scope");

function testFunc(){
  var baz = 'baz';
}
