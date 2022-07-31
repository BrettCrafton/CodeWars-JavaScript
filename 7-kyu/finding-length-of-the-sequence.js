var lengthOfSequence = function (arr, n) {
  let first = arr.indexOf(n)
  return arr.filter(x => x == n).length == 2 ? arr.indexOf(n, first +1) - first + 1 : 0
};