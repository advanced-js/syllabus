var Person = function(first, last){
  this.first = first;
  this.last = last;

  this.fullName = function(){
    return this.first + ' ' + this.last;
  };
};

Person.prototype.title = function(){
  return 'Mr. ' + this.fullName();
};

var bruce = new Person('Bruce', 'Wayne');
var tony = new Person('Tony', 'Stark');

assert(bruce.fullName() === 'Bruce Wayne', "correct fullName for bruce");
assert(tony.fullName() === 'Tony Stark', "correct fullName for tony");

assert(bruce.fullName !== tony.fullName, "functions created in the constructor are unique to each instance");

assert(bruce.title() === 'Mr. Bruce Wayne', "correct title for bruce");
assert(tony.title() === 'Mr. Tony Stark', "correct title for tony");

assert(bruce.title === tony.title, "functions set on the prototype are shared by all instances");
