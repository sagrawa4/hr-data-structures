var HashTable = function() {
  var hashTable = Object.create(HashTable.prototype);
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.indexTracker = [];
  this.bucket = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  if (!this.indexTracker.includes(index)) {
    this._storage.set(index, this.bucket);
    this.bucket.push(tuple);
  } else {
    for (var i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i][0] === k) {
        this.bucket[i][1] = v;
      } else {
        this.bucket.push(tuple);
      }
    }
  }
  this.indexTracker.push(index);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][0] = null;
      bucket[i][1] = null;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


