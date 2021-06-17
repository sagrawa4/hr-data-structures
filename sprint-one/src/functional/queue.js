var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var start=0; var end = 0;

  someInstance.enqueue = function(value) {
    storage[end]=value;
    end++
  };

  someInstance.dequeue = function() {
    var del = storage[start];
    delete storage[start];
    start++;
    return del;
  };

  someInstance.size = function() {
    var length =0;

    for(var i in storage) {
      length++;
    }

    return length;
  };

  return someInstance;
};
