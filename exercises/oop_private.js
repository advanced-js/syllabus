var User = function(username, pass){
  var password = pass;
  this.username = username;

  this.correctPassword = function(pass){
    return pass === password;
  };
};

var tony = new User('tony', '12345');

assert(tony.pass === undefined, "the args aren't accessible");
assert(tony.password === undefined, "private properties aren't accessible");
assert(tony.correctPassword('12345'), "methods can access private vars");
