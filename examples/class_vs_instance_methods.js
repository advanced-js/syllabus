var Person = function(first, last){
  this.first = first;
  this.last = last;
};

// instance method
Person.prototype.fullName = function(){
  return this.first + ' ' + this.last;
};

// 'class' method
Person.newKitten = function(first, parent1, parent2){
  var last = parent1.last + '-' + parent2.last;
  return new Person(first, last);
};


var alex = new Person('Alex', 'Bisker');
var aidan = new Person('Aidan', 'Feldman');

assert(alex.newKitten === undefined, "class method isn't available on an instance");
assert(Person.fullName === undefined, "instance method isn't available on the class");

var blondie = Person.newKitten('Blondie', alex, aidan);

assert(blondie instanceof Person, "if you *treat* it like a child...");
assert(blondie.fullName() === 'Blondie Bisker-Feldman', "assigns the name correctly");
