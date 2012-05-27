// Fake jQuery: aQuery!

var aQueryCalled = false;

var aQuery = function(){
  aQueryCalled = true;
};

var $$ = function(){
  throw new Error("outer $() should not be called");
};

// this technique is used for jQuery plugins, where there might be other plugins that use the dollar sign variable
(function($$){
  // $$ is assigned to the argument passed in, which supercedes the local variable above
  $$('foo');
  assert(aQueryCalled, "jQuery() should have been called");
})(aQuery);
