//array of numbers
//can be negative or float?

//also given a number as target
//can also be negative or float?

//does not appear the need to deal with wrong types

function twoSum(numbers, target) {
  //locate 2 numbers within arr that add to target
    //instead of parsing arr for 2 numbers, you know what second number has to be in relation to first
    //so search array for target minus arr element and see if that number occurs in arr
    //if so put both indexs in array
  
  //indexof for index
  //set as arr elements
  let num
  for(let i = 0; i < numbers.length; i++){
    if(numbers.includes(target - numbers[i])){
      num = i
    }
  }
  return [num, numbers.indexOf(target - numbers[num])]
}

//return
//an array
//array has 2 elements
//elements are indexes of the two numbers in para array that sum to para target

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]