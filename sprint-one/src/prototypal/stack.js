var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.length = 0;
  console.log(newStack);
  return newStack;
};

var stackMethods = {};

stackMethods.push = function (value) {
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