var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var key =0;

  someInstance.push = function(value) {
    key++;
    storage[key]=value;
  };

  someInstance.pop = function() {
    var del = storage[key];
    delete storage[key];
    key--;
    return del;
  };

  someInstance.size = function() {
    var length=0;
    for(var key in storage) {
      length++;
    }
    return length;
  };

  return someInstance;
};
