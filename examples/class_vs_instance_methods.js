var Person = function(first, last){
  this.first = first;
  this.last = last;
};

// instance method
Person.prototype.fullName = function(){
  return this.first + ' ' + this.last;
};

// 'class' method
Person.newKid = function(first, parent1, parent2){
  var last = parent1.last + '-' + parent2.last;
  return new Person(first, last);
};


var jane = new Person('Jane', 'Gordon');
var dennis = new Person('Dennis', 'Levitt');

assert(jane.newKid === undefined, "class method isn't available on an instance");
assert(Person.fullName === undefined, "instance method isn't available on the class");

var joseph = Person.newKid('Joseph', jane, dennis);

assert(joseph instanceof Person, "the factory method returns a new instance");
assert(joseph.fullName() === 'Joseph Gordon-Levitt', "assigns the name correctly");
