// Fake jQuery
// Usage:
//   $$('#mySelector') // element
//   $$.cacheLength() // int (number of selectors in cache)

var $$ = (function(){
  // private variables
  var elementCache = {},
    cacheSize = 0;

  var base = function(selector){
    // check if it's already cached
    var elt = elementCache[selector];
    if (!elt){
      elt = 'fakeElement'; // we would actually use document.getElementById(), etc.
      elementCache[selector] = elt; // cache it
      cacheSize++;
    }
    return elt;
  };

  base.cacheLength = function(){
    return cacheSize;
  };

  // return public API as a function/object
  return base;
})();


assert($$.elementCache === undefined, "private variables should be undefined");
assert($$.cacheLength() === 0, "cache should be empty to start");

var elt = $$('#myDiv');

assert($$.cacheLength() === 1, "cache should be incremented after query");

var sameElt = $$('#myDiv');

assert($$.cacheLength() === 1, "cache should be not be incremented for a repeated query");
