Array.prototype.reverse = function() {
  let l = this.length
  this.forEach((x, i, arr) => this.push(arr[l-1-i]))
  this.splice(0, l)
  return this
};