var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
}

var Node = function(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

DoublyLinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value);
  if (this.tail) {
    var prevTail = this.tail;
    prevTail.next = newNode;
    this.tail = newNode;
    this.tail.prev = prevTail;
  } else {
    this.head = newNode;
    this.tail = newNode;
  }
}

DoublyLinkedList.prototype.removeHead = function() {
  var result = this.head;
  this.head = this.head.next;
  return result.value;
}

DoublyLinkedList.prototype.contains = function(target) {
  // for (var key in this) {
  //   if (this[key].value === target) return true;
  // }


  var currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.value === target) return true;
    currentNode = currentNode.next;
  }
  return false;
}


// var LinkedList = function(){
//   var list = {};
//   list.head = null;
//   list.tail = null;
//
//   list.addToTail = function(value){
//     var newNode = Node(value);
//     if (list.tail) {
//       list.tail.next = newNode;
//     }
//     if (!list.head) {
//       list.head = newNode;
//     }
//     list.tail = newNode;
//   };
//
//   list.removeHead = function(){
//     var result = list.head;
//     list.head = list.head.next;
//     return result.value;
//   };
//
//   list.contains = function(target){
//     for (var key in list) {
//       if (list[key].value === target) return true;
//     }
//     return false;
//   };
//
//   return list;
// };
//
// var Node = function(value){
//   var node = {};
//
//   node.value = value;
//   node.next = null;
//
//   return node;
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */
