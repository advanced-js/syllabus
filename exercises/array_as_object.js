var myAry = [
  'foo',
  'bar',
  'baz'
];

assert(myAry[0] === 'foo', "access with number");
assert(myAry['0'] === 'foo', "access with string");

assert(typeof myAry === 'object', "it's an object");

myAry.newProp = "It's an object!";
assert(myAry.newProp === "It's an object!", "assigning arbitrary properties");
assert(myAry[0] === 'foo', "array access still works");
