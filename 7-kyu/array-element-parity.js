function solve(arr){
  return arr.find((x,i) => !arr.slice(0, i).includes(-x) && !arr.slice(i+1).includes(-x))
};