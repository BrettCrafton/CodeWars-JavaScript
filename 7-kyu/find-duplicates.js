function duplicates(arr) {
  let res = []
  for(let i = 1; i< arr.length; i++){
   if(arr.slice(0, i).includes(arr[i])){
     res.push(arr[i])
   } 
  }
  return [...new Set(res)]
}

// [...new Set(arr.filter((x,i,arr) => arr.slice(0, i).concat(arr.slice(i+1)).includes(x)))]