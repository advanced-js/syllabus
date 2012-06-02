var User = function(username, pass){
  var password = pass;
  this.username = username;

  this.login = function(pass){
    return pass === password;
  };
};

var tony = new User('tony', '12345');

assert(tony.pass === undefined, "the args aren't accessible");
assert(tony.password === undefined, "private properties aren't accessible");

assert(tony.login('foo') === false, "methods can access private vars");
assert(tony.login('12345') === true, "methods can access private vars, again");

// EXERCISE:
// create a Backbone-like model that has get() and set() methods that work for arbitrary attributes, e.g.
//
//   var bob = new User();
//   bob.set('phone', '123-456-7890');
//   var bobsPhone = bob.get('phone');
