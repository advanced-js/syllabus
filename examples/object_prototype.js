// remember array_as_object.js?
// native types have prototypes, too

var myAry = [];
var myObj = {};

assert(typeof myObj === 'object', "an object is an Object");
assert(typeof myAry === 'object', "so is an Array");

assert(Object.prototype.toString.apply(myObj) === '[object Object]', "Object's toString() acts differently than typeof");
assert(Object.prototype.toString.apply(myAry) === '[object Array]', "it can distinguish an Array from an Object");
