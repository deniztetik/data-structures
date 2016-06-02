var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.push = function(value) {
    storage[size++] = value; //post-increment
  };

  someInstance.pop = function() {
    if (size > 0) {
      var result = storage[--size]; //pre-decrement
      delete storage[size];
      return result;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
}