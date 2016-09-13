function quickSort(arr) {
  function recurse(arr, low, high) {
    if (low < high) {
      let pivot = partition(arr, low, high);
      recurse(arr, low, pivot - 1);
      recurse(arr, pivot + 1, high);
    }
  }
  recurse(arr, 0, arr.length - 1);
  return arr;
}

function partition(arr, low, high) {
  let pivot = low;
  swap(arr, pivot, high);
  for (let i = low; i < high; i++) {
    if (arr[i] <= arr[high]) {
      swap(arr, i , low);
      low++;
    }
  }
  swap(arr, low, high);
  return low;
}

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}
