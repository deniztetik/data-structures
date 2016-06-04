var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tup = [k,v];
  var bucket = this._storage.get(i);
  // check for and handle collisions
  // if storage[i] is undefined
    // if (this._storage[i] === undefined){
    if (bucket === undefined) {
      this._storage.set(i, [tup]);
    } else{
      bucket.push(tup);
      this._storage.set(i, bucket);
    }

    // make ew bucket
  //else push onto existing bucket
  //var new_bucket_entry = bucket[bucket.length - 1];

  // console.log("tup is " + tup)


};

HashTable.prototype.retrieve = function(k){
  var desired_index = getIndexBelowMaxForKey(k, this._limit);
  //this is the wanted for input key (k)
  var desired_bucket = this._storage.get(desired_index);
  for (var i = 0; i < desired_bucket.length; i++) { //each tuple in bucket
    var tuple = desired_bucket[i];
    if (tuple[0] === k) return tuple[1];
  }
  return null
};

HashTable.prototype.remove = function(k){
  var desired_index = getIndexBelowMaxForKey(k, this._limit);
  var desired_bucket = this._storage.get(desired_index);
  // this._storage.set(i, null);
  for (var i = 0; i < desired_bucket.length; i++) { //each tuple in bucket
    var tuple = desired_bucket[i];
    if (tuple[0] === k) {
      desired_bucket.splice(i,1)
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
