var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.key = 0;

};


Stack.prototype.push = function(value) {
  this.key++;
  this.storage[this.key] = value;
};

Stack.prototype.pop = function() {
  var del = this.storage[this.key];
  delete this.storage[this.key];
  this.key--;
  return del;
};

Stack.prototype.size = function() {
  var length = 0;
  for (var i in this.storage) {
    length++;
  }
  return length;
};

