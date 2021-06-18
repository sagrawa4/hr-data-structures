

// Instantiate a new graph
var Graph = function() {
  //make nodes object -> create an empty node object
  //use object create to make a deligation object for node

  var graph = Object.create(Graph.prototype);
  graph.object = {};
  /*node.object = {};
  object.key = 0;
  object.value = [];*/
  return graph;

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.object[node] = [];
  // this.graph.node = {};
  //this.object[node] = [];
  //instatiate node object of nodes object (nodes[node])
  //create a new node by calling Graph and add it to the graph object
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
if (this.object[node] !== undefined) {
  return true;
} else {
  return false;
}

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
delete this.object[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.

Graph.prototype.hasEdge = function(fromNode, toNode) {
  var arr = this.object[fromNode];
  if (arr.length === 0) {
    return false;
  }
  for( var i = 0; i < arr.length; i++) {
    if(arr[i] === toNode) {
      return true;
    } else {
      return false;
    }
  }

};

// 4 : [];
// 5 : [4];
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.object[fromNode].push(toNode);
  this.object[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var emptyArr = [];
  var arr = this.object[fromNode];
  for( var i =0 ; i < arr.length; i++) {
    if(arr[i] !== toNode) {
      emptyArr.push(arr[i]);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


