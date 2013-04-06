var myAry = [
  'foo',
  'bar',
  'baz'
];

assert(myAry[0] === 'foo', "access with number");
assert(myAry['0'] === 'foo', "access with string");

assert(typeof {} === 'object', "an object is an Object");
assert(typeof myAry === 'object', "so is an Array");

myAry.newProp = "A property on an array";
assert(myAry.newProp === "A property on an array", "assigning arbitrary properties");
assert(myAry['newProp'] === "A property on an array", "can retrieve properties with square brackets");
assert(myAry[0] === 'foo', "array access still works");
