var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if (list.tail) {
      list.tail.next = newNode;
    }
    if (!list.head) {
      list.head = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    var result = list.head;
    list.head = list.head.next;
    return result.value;
  };

  list.contains = function(target){
    for (var key in list) {
      if (list[key].value === target) return true;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
