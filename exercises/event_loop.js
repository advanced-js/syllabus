// statements execute in order, except when there is a call that is asynchronous

var order = [];

order.push('before');

setTimeout(function(){
  order.push('within');

  assert(order[0] === 'before', "'before' executed first");
  assert(order[1] === 'after', "asyn function is skipped");
  assert(order[2] === 'within', "callback executed last");
}, 0);

order.push('after');

// procedural statements executed in order, and async functions are queued in event loop
