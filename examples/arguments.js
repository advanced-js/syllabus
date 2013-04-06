function argumentative(){
  assert(!(arguments instanceof Array), "'arguments' isn't really an array");
  assert(typeof arguments.join === 'undefined', "no join method on 'arguments'");

  assert(arguments.length === 3, "but 'arguments' do have 'length'");
}

argumentative('foo', 'bar', 'baz');
