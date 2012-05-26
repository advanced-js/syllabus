function title(first, last){
  return first + ' ' + last + ', M.D.';
}

assert(title.call(this, 'Michaela', 'Quinn') === 'Michaela Quinn, M.D.', "call() takes individual arguments after the context");
assert(title.apply(this, ['Michaela', 'Quinn']) === 'Michaela Quinn, M.D.', "apply() takes individual arguments after the context");

// easy to remember - 'a' (in 'apply') is for Array
