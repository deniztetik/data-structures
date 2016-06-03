var BinarySearchTree = function(value){
  var node = Object.create(bst_prototype)

  node.value = value

  node.left = null
  node.right = null

  return node

};

var bst_prototype = {};

bst_prototype.insert = function(item){

  var node = BinarySearchTree(item)

  for(var n in bst){

    if(node.value > n.value && node.right === null){

    }

  }

}


bst_prototype.contains = function(item){


}

bst_prototype.depthFirstLog = function(item){


}


/*
 * Complexity: What is the time complexity of the above functions?
 */
