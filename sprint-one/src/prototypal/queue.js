var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function() {
  var del = this.storage[this.start];
  delete this.storage[this.start];
  this.start++;
  return del;
};

queueMethods.size = function() {
  var length = 0;

  for (var s in this.storage) {
    length++;
  }
  return length;
};

