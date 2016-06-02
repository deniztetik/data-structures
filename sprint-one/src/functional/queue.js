var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size++] = value; //post-increment
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      var result = storage[0];
      for (var key in storage) {
        storage[key] = storage[+key+1];
      }
      delete storage[--size];
      return result;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
}