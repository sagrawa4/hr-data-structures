// Instantiate a new graph
var Graph = function() {
  var graph = Object.create(Graph.prototype);
  graph.object = {};
  return graph;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.object[node] = [];
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
  var array1 = this.object[node]; // what if node has no edges
  for (var i = 0; i < array1.length; i++) {
    var key = array1[i];
    for (var j = 0; j < this.object[key].length; j++) {
      var value = this.object[key][j];
      var emp = [];
      if (value !== node) {
        emp.push(value);
      }
    }
    this.object[key] = emp;
  }

  /*if (nodesArray.length > 0) {
    _.each(nodesArray, function(item) {
      this.removeEdge(item, node);
    });
  }*/

  delete this.object[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.

Graph.prototype.hasEdge = function(fromNode, toNode) {

  var hasEdgeDirectionOne = false;
  var hasEdgeDirectionOpposite = false;

  if (this.object[fromNode].includes(toNode)) {
    hasEdgeDirectionOne = true;
  }


  if (this.object[toNode] !== undefined && this.object[toNode].includes(fromNode)) {
    hasEdgeDirectionOpposite = true;
  }

  if (hasEdgeDirectionOne && hasEdgeDirectionOpposite) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.object[fromNode].push(toNode);
  this.object[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.

Graph.prototype.removeEdge = function(fromNode, toNode) {
  // if this.hasEdge(fromNode, toNode);
  if (this.object[fromNode].includes(toNode)) {
    //remove happens here
    var newArr = [];
    for ( var i = 0; i < this.object[fromNode].length; i++) {
      if (this.object[fromNode][i] !== toNode) {
        emptyArr.push(this.object[fromNode][i]);
      }
    }
    this.object[fromNode] = newArr;
  }
  // if hasEdge(toNode, fromeNode)
  if (this.object[toNode].includes(fromNode)) {
    var newArr = [];
    for (var i = 0; i < this.object[toNode].length; i++) {
      if (this.object[toNode][i] !== fromNode) {
        emptyArr.push(this.object[toNode][i]);
      }
    }
    this.object[toNode] = newArr;
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.object, function(item) {
    return cb(item);
  });

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


