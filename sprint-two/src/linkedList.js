var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  //Time Complexity: O(1)
  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
    } else {
      list.tail.next = node;
    }
    list.tail = node;
  };
  //Time Complexity: O(1)
  list.removeHead = function() {
    var removedNode = list.head;
    list.head = list.head.next;

    return removedNode.value;
  };


  //Time Complexity: O(n)
  list.contains = function(target) {
   var ptr = list.head;
      while (ptr) {
         if(ptr.value === target) {
          return true;
        }
       ptr = ptr.next;
      }
      return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
