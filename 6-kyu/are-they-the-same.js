function comp(array1, array2){
  if(array2 == null || array1 == null){    
    return false
    }
  else{
  console.log(array1, array2)
  let rootedArr = array2.map(x => Math.sqrt(x))
  console.log(rootedArr.sort((a,b) => a-b))
  console.log(array1.sort((a,b) => a-b))
  let zerodArr = array1.map((x, i) => x - rootedArr[i])
  return !zerodArr.find(x => x != 0)
}
}