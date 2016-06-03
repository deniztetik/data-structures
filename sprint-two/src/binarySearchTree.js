var BinarySearchTree = function(value){
  var node = Object.create(bst_prototype)

  node.value = value

  node.right = null
  node.left = null

  return node

};

var bst_prototype = {};

bst_prototype.insert = function(item){

  var node = BinarySearchTree(item)

  function recurseInsert(n) {
    if (n.right === null && item > n.value) {
      n.right = node;
    } else if (n.left === null && item < n.value) {
      n.left = node;
    } else if (item > n.value) {
      //go right
      recurseInsert(n.right);
    } else if (item < n.value) {
      //go left
      recurseInsert(n.left);
    }
  }

  recurseInsert(this);
}


bst_prototype.contains = function(item){
  var result = false

  function recurseContains(n) {
    if (item === n.value) result = true;
    else if (n.right !== null && item > n.value) {
      return recurseContains(n.right);
    } else if (n.left !== null && item < n.value) {
      return recurseContains(n.left);
    }
  }

  recurseContains(this);
  return result;
}

bst_prototype.depthFirstLog = function(cb){

  function recurseDFL(n) {
    cb(n.value);
    if (n.left !== null) recurseDFL(n.left);
    if (n.right !== null) recurseDFL(n.right);
  }

  recurseDFL(this);
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
