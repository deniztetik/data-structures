

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
  var index_node = this.nodes.indexOf(node)
  this.nodes.splice(index_node,1)
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var i = 0; i < this.edges.length; i++) {
    var edge = this.edges[i];
    if (edge[0] === fromNode && edge[1] === toNode) return true;
  }
  return false;

};

Graph.prototype.addEdge = function(fromNode, toNode){

  this.edges.push([fromNode,toNode])
  this.edges.push([toNode,fromNode])

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var index;
  console.log(this.edges[0],this.edges[1])
  for (var i = 0; i < this.edges.length; i++) {
    var edge = this.edges[i];
    if (edge[0] === fromNode && edge[1] === toNode){
          index = i
    }
  }

  this.edges.splice(index,1)
  console.log(this.edges[0],this.edges[1])

};

Graph.prototype.forEachNode = function(cb){
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
