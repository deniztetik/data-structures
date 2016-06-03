var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var result = false;

  function recurse(node) {
    if (node.value === target) {
      result = true;
      return;
    }
    for (var i = 0; i < node.children.length; i++) {
      recurse(node.children[i]);
    };
  }

  recurse(this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
