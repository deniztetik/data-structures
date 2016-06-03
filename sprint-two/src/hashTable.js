var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // check for and handle collisions
  var tup = [k,v]
  var bucket = []
  this._storage.set(i, bucket.push(tup));
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //this is the wanted for input key (k)
  var bucket = this._storage.get(i);

  return bucket[0][1]
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
