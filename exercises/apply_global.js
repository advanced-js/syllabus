var myVariable = "I'm global!";

function printMyVariable(){
  return this.myVariable;
}

assert(printMyVariable() === "I'm global!", "without specifying context");
assert(printMyVariable.apply(this) === "I'm global!", "using 'this' context");
