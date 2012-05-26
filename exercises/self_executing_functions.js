// this technique is used for jQuery plugins, where there might be other plugins that use the dollar sign variable

var jQueryCalled = false;

var jQuery = function(){
  jQueryCalled = true;
};

var $ = function(){
  throw new Error("outer $() should not be called");
};

(function($){
  $('foo');
  assert(jQueryCalled, "jQuery() should have been called");
})(jQuery);
