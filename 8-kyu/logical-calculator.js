function logicalCalc(array, op){ 
  if(array.length == 1){
    return array[0]
  }
  else if (op == "AND"){
    return !array.includes(false) 
  }
  else if (op == "OR"){
    return array.includes(true)
  }
  else{
    let pushArr = [array[0]!= array[1]]
    let mappedArray = array.slice(2, array.length).forEach((x, i) => x == pushArr[i] ? pushArr.push(false) : pushArr.push(true))
    return pushArr[pushArr.length - 1]
  }
}