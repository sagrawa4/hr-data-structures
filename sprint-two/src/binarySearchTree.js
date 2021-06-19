var BinarySearchTree = function(value) {
  //node has: 2 children and one value
  //insert
  //contains
  //depth first
  var newBST = {};
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;
  _.extend(newBST, BSTmethods);
  return newBST;
};

var BSTmethods = {};

//O(n)
BSTmethods.insert = function(value) {
  if (this.value > value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  if (this.value < value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

//O(n) -> Worst Case
// log of n -> Best Case
BSTmethods.contains = function(value) {
  if (this.value > value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
  if (this.value < value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
  if (this.value === value) {
    return true;
  }
};
// O(n)
BSTmethods.depthFirstLog = function(functor) {
  functor(this.value);
  if (this.left) {
    this.left.depthFirstLog(functor);
  }
  if (this.right) {
    this.right.depthFirstLog(functor);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
