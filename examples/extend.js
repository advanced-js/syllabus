function extend(dest /*, sources */){
  var source, attr;
  for (var i = 1; i < arguments.length; i++){
    source = arguments[i];
    for (attr in source){
      dest[attr] = source[attr];
    }
  }
}

var obj1 = {
  obj1Prop: true
};

var obj2 = {
  obj2Prop: true
};

extend(obj1, obj2);

assert(deepEqual(obj1, { obj1Prop: true, obj2Prop: true }), "merges properties onto destination");
assert(deepEqual(obj2, { obj2Prop: true }), "doesn't modify source object");
