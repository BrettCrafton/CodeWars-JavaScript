function combine() {
  let arr = [...arguments]
  let obj = {}
  for(let i = 0; i < arr.length; i++){
    for(let keys in arr[i]){
      if(obj[keys]){
        obj[keys]+=arr[i][keys]
      }
      else{
        obj[keys] = arr[i][keys]
      }
  }
  }
  return obj
}