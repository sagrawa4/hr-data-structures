var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);// here someInstance is a delegating object. Any failed lookup in someInstance, takes a lookup into stackMethods onject

  someInstance.storage = {};

  return someInstance;
};

var key = 0;
var stackMethods = {};

stackMethods.push = function(value) {
  key++;
  this.storage[key] = value;
};

stackMethods.pop = function() {
  var del = this.storage[key];
  delete this.storage[key];
  key--;
  return del;
};

stackMethods.size = function() {
  var length = 0;
  for (var i in this.storage) {
    length++;
  }
  return length;
};




