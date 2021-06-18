var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
_.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //add new child to a place in the tree (Tree(value))
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  //traverse nodes until target is found (depth first search?)
  if (this.value === target) {
    //return true if found
    console.log(this.children.value);
    return true;
  } if (this.children.length > 0) {
    //iterate through this.children
    for (var i = 0; i < this.children.length; i++) {
      var bool = this.children[i].contains(target);
      if (bool) {
        return true; //calls the bool test every time we iterate
      }
    }
  }
  return false;

};

   //return false if not

    /*innerFunction = function(node) {
      if(node.value === target) {
        return true;
      } else if (this.children.length > 0) {
        for (var i = 0; i < this.children.length; i++) {
          innerFunction(this.children[i]);
      }
    }
    innerFunction(this.value);*/

/*
 * Complexity: What is the time complexity of the above functions?
 */
