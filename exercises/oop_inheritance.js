var Vehicle = function(){};

Vehicle.prototype.numWheels = function(){
  return undefined;
};

var Car = function(){};
// a bit of strange JS magic to inherit methods
Car.prototype = new Vehicle();

Car.prototype.numWheels = function(){
  return 4;
};

var myVehicle = new Vehicle();
var myCar = new Car();

assert(myCar.numWheels() === 4, "subclass used its own function definition");
assert(myVehicle.numWheels() === undefined, "superclass function wasn't overwritten");
