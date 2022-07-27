function consecutive(arr) {
  return arr.length ? Math.max(...arr)-Math.min(...arr)-arr.length+1 : 0;
}