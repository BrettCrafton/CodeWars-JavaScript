function cutIt(arr){
  let min = Math.min(...arr.map(x => x.length))
  return arr.map(x => x.slice(0, min))
  
}