// Fake jQuery
// Usage:
//   $$('#mySelector') // element
//   $$.cacheLength() // int (number of selectors in cache)

var $$ = function(selector){
  assert(this !== $$, "'this' refers to the window/global");

  // check if it's already cached
  var elt = $$._elementCache[selector];
  if (!elt){
    elt = 'fakeElement'; // we would actually use document.getElementById(), etc.
    $$._elementCache[selector] = elt; // cache it
    $$._cacheSize++;
  }
  return elt;
};

// private variables - by convention, names start with underscore
$$._elementCache = {};
$$._cacheSize = 0;

// public method
$$.cacheLength = function(){
  assert(this === $$, "'this' refers to the parent object, $$");

  return this._cacheSize;
};


assert(deepEqual($$._elementCache, {}), "private variable '_elementCache' is accessible");
assert($$._cacheSize === 0, "private variable '_cacheSize' is accessible");
assert($$.cacheLength() === 0, "cache should be empty to start");

var elt = $$('#myDiv');

assert($$.cacheLength() === 1, "cache should be incremented after query");

var sameElt = $$('#myDiv');

assert($$.cacheLength() === 1, "cache should be not be incremented for a repeated query");
