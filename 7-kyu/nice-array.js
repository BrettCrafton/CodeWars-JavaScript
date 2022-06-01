function isNice(arr){
  console.log(arr)
  return arr.length < 1 ? false : arr.every(x => arr.includes(x + 1 ) || arr.includes(x -1 )) 
}