var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // check for and handle collisions
  var tup = [k,v]
  var bucket = []
  var new_bucket_entry = bucket.push(tup)
  console.log("tup is " + tup)
  console.log("new_bucket_entry is " + new_bucket_entry)
  console.log("this.storage is " + this.storage)
  this._storage.set(i, new_bucket_entry);
};

HashTable.prototype.retrieve = function(k){
  var desired_index = getIndexBelowMaxForKey(k, this._limit);
  //this is the wanted for input key (k)
  var desired_bucket = this._storage.get(desired_index);
  // console.log("desired_bucket is " + desired_bucket)
  // console.log("desired_bucket[0] is " + desired_bucket[1])
  return desired_bucket[1]
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
