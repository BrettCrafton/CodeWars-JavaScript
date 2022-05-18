//function unique_in_order
//takes in a sequence of elements
//can be string of letters, upper and lower, or array of numbers
//will have duplicate values next to each other


var uniqueInOrder=function(iterable){
  //grab arguement from function, may need to determine typeof before proceeding as may have different solution based on array/string
  //create return array
  //loop may be easiest
  //in loop determine if current value is equal to last value before pushing into return array
  //use charat(i) or [i] to loop though
  //return array
  console.log(iterable)
  let arr = []
  arr.push(iterable[0])
  for(let i = 1; i < iterable.length; i++){
    console.log(iterable[i]) 
    if(iterable[i] != arr[arr.length-1]){
      arr.push(iterable[i])
    }
  }
  console.log(arr)
  return iterable == [] ? [] : arr
}

//wants returned
//all the elements in an array
//elements need to be in same order
//remove all duplicates that are next to each other, with no seperation

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]