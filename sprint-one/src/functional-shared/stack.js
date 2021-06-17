var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  someInstance.storage = {};

  _.extend(someInstance, stackMethods );

  return someInstance;
}
var key = 0;
//console.log(this.storage);
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
}
stackMethods.size = function() {
  var length =0;
  for(var i in this.storage) {
    length++;
  }
  return length;
};




