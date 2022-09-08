function findMissingNumbers(arr){
  if(arr.length){
      let compare = Array(arr[arr.length-1] - arr[0]).fill().map((_,i) => arr[0] + i)
    return compare.filter(x => !arr.includes(x))
  }
  else{
   return [] 
  }
}