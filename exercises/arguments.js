// print all the arguments given, separated with a comma and a space

function echo(/* arguments */){
  assert(!(arguments instanceof Array), "'arguments' isn't really an array");
  assert(typeof arguments.join === 'undefined', "no join method on 'arguments'");
  
  // copy arguments over to an array
  var list = [];
  for (var i = 0; i < arguments.length; i++){
    list[i] = arguments[i];
  }

  assert(list instanceof Array, "'list' is a real array");
  assert(typeof list.join === 'function', "real arrays have join()");

  return list.join(', ');
}

assert(echo('foo', 'bar', 'baz') === 'foo, bar, baz', "returns the concatenated list");
assert(echo() === '', "'arguments' still defined when none are passed");
