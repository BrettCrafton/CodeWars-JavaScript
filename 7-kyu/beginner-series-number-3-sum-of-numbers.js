function getSum( a,b ){ 
  return Array(Math.max(...arguments) - Math.min(...arguments) + 1).fill(Math.min(...arguments)).map((x,i) => x + i).reduce((a,c) => a + c, 0) 
  }