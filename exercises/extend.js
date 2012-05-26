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
assert(obj1.obj1Prop, "extend() keeps original properties");
assert(obj1.obj2Prop, "extend() copies properties from the source object");
