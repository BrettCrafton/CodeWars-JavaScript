function sumOfN(n) {
  let arr = Array(Math.abs(n) +1).fill().map((_,i) => n < 0 ? -i : i )
  return arr.map((x,i,array) => array.slice(0, i + 1 ).reduce((a,c) => a+c, 0)) 
};