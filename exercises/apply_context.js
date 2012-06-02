// NOTE: broken in the deck

var myVariable = "I'm global!";

function printMyVariable(){
  return this.myVariable;
}

// without additional arguments, apply() vs. call() are interchangeable
assert(printMyVariable() === "I'm global!", "without specifying context");
assert(printMyVariable.apply(null) === "I'm global!", "using 'null' context");
assert(printMyVariable.apply(undefined) === "I'm global!", "using 'undefined' context");
assert(printMyVariable.apply(this) === "I'm global!", "using 'this' context");

assert(printMyVariable.apply({ myVariable: "I'm local!" }) === "I'm local!", "using object as context");
