//create function sortArray
//given an array as parameter
//array will contain numbers
//int ? float? empty? non-number? negatives?

function sortArray(array) {
  //duplicate original array
  //filter new array for only odd numbers
  //sort that list of odd numbers
  //use map to add a .shift variable off the sorted odd array and put in place of odd digit in array
  //return this
  
  let oddArr = array.filter(x => x % 2 != 0).sort((a, b) => a - b)
  let result = array
  return result.map(x => x % 2 != 0 ? x = oddArr.shift() : x)
}

//return
//an array
//array of original numbers, but odds are in ascending order
//evens are left in place, original order


// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]