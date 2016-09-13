var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.length = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.length++] = value;
};

queueMethods.dequeue = function() {
  if (this.length > 0) {
  	var result = this[0];
    for (var key in this) {
      if (!isNaN(key)) this[key] = this[+key + 1];
    }
    delete this[--this.length];
    return result;
  }
};

queueMethods.size = function() {
	return this.length;
};
