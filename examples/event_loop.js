// statements execute in order, except when there is a call that is asynchronous

var order = [];

order.push('before');

setTimeout(function(){
  order.push('within');

  assert(deepEqual(order, ['before', 'after', 'within']), "timeout callback executed last");
}, 0);

order.push('after');

// procedural statements executed in order, and async functions are queued in event loop
