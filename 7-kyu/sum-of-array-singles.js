function repeats(arr){
  let obj = arr.reduce((a,c) => (a[c] = a[c] + 1 || 1,a), {})
  let count = 0
  for(let key in obj){
    if(obj[key] == 1 ) count+= +key
  }
  return count
};