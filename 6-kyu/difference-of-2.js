//given an array
//array of numbers
//no duplicates
//whole / floats? negatives?


function twosDifference(input){
  //create empty array
  //push pair array to new array if available
  //use push if input.includes
  
  let arr = []
  for(let i = 0; i < input.length; i++){
    if(input.includes(input[i] + 2)){
    arr.push([input[i], input[i] + 2])
      }
  }
 return arr
}

//array
//with nested array pairs
//pairs are all digits within array that are seperated by 2


// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]

// [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

// [1, 23, 3, 4, 7] should return [[1, 3]]

// [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]