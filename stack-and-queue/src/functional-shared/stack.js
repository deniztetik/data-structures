var Stack = function() {
  var newStack = {};
  newStack.length = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.length++] = value;
};

stackMethods.pop = function() {
  if (this.length > 0) {
  	var result = this[--this.length];
  	delete this[this.length];
  	return result;
  }
};

stackMethods.size = function() {
	return this.length;
};


// var Stack = function() {
//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};
//   var size = 0;

//   // Implement the methods below

//   someInstance.push = function(value) {
//     storage[size++] = value; //post-increment
//   };

//   someInstance.pop = function() {
//     if (size > 0) {
//       var result = storage[--size]; //pre-decrement
//       delete storage[size];
//       return result;
//     }
//   };

//   someInstance.size = function() {
//     return size;
//   };

//   return someInstance;
// }