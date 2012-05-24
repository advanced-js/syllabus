var person1 = {
  first: 'Bob',
  last: 'Hope'
};
var person2 = person1;

person2.last = 'Marley';

assert(person1.last === 'Marley', "the original object is changed");
assert(person1 === person2, "they are the same object");
