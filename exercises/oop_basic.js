var Person = function(first, last){
  this.first = first;
  this.last = last;
};

var bob = new Person('Bob', 'Hope');
var sally = new Person('Sally', 'Field');

assert(bob.first === 'Bob', "the public properties are accessible");

assert(bob !== sally, "two instances are not the same");

assert(bob instanceof Person, "'new' creates instance");
assert(bob instanceof Object, "it's an Object");
