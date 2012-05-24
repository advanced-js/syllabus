function fullName(){
  return this.first + ' ' + this.last;
}

var myName = fullName.apply({ first: 'Bob', last: 'Hope' });
assert(myName === 'Bob Hope', "should use the context of the provided object");
