function span(arr, predicate) {
  let test = [], test2 = []
  for(let i = 0; i < arr.length; i++){
    if(predicate(arr[i])){
       test.push(arr[i])
       }
    else{
      test2 = arr.slice(i)
      break
    }
  }
  return [test, test2]
}