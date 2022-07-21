function myLanguages(results) {
  let arr = []
  for(const keys in results){
   if(results[keys] >= 60 )arr.push(keys)
  }
  return arr.sort((a,b) => results[b] - results[a])
}