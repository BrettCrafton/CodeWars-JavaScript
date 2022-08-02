function solve(arr){
  return arr.filter((x, i, arr1) => arr1.slice(i + 1).every(e => e < x))
};