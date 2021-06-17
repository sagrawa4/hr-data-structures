var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //var someInstance = {}
  this.storage = {};

};

var key = 0;

Stack.prototype.push = function(value) {
  key++;
  this.storage[key] = value;
};

Stack.prototype.pop = function() {
  var del = this.storage[key];
  delete this.storage[key];
  key--;
  return del;
}

Stack.prototype.size = function() {
  var length =0;
  for(var i in this.storage) {
    length++;
  }
  return length;
};

