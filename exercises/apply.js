function fullName(){
  return this.first + ' ' + this.last;
}

assert(fullName.apply({ first: 'Bob', last: 'Hope' }), "should use the context of the applied object");
