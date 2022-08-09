function solve(arr){  
  return arr.map(x => x.toLowerCase().split("").map(e => e.charCodeAt()-97).filter((p,i) => p == i).length)
};