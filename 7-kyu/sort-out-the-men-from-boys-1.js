function menFromBoys(arr){
  return [...new Set(arr.filter(x => x%2 ==0).sort((a,b) => a -b).concat(arr.filter(x => x%2).sort((a,b) => b-a)) )]
}