// fake jQuery
var $$ = {
  get: function(url, callback){
    // this is where the call to the server would happen

    // fake it with a timeout
    setTimeout(function(){
      callback({ status: 'ok' });
    }, 100);
  }
};

var callbackCalled = false;
$$.get('http://foo.com/bar.json', function(data){
  callbackCalled = true;
  assert(data.status === 'ok', "the callback receives the data");
});

assert(!callbackCalled, "callback doesn't exectute immediately");
