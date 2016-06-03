

var Graph = function(){
this.nodes = []
this.edges = []
};

Graph.prototype.addNode = function(node){
  this.nodes.push(node)
};

Graph.prototype.contains = function(node){
  return this.nodes.indexOf(node) !== -1
};

Graph.prototype.removeNode = function(node){
  this.nodes.slice
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
