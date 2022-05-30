//given a number
//will only be whole it appears, non negative, not 0

multiplicationTable = function(size) {
  //build length array of size? or push arrays into empty array?
  
  //loop till i == size
  //or......
  //fill array to n length of arrays
  //map array, (index of array + 1) * (index of nested array + 1)
  
  return [...Array(size)].map((x, i) => [...Array(size)].map((xN, iN) => (i + 1) * (iN + 1)))
  //this may be the coolest line of code i have written
  //explanation: 
  //create an array of length size (all elements will be undefined)
  //map to those elements, arrays of length size (all elements and nested elements will be undefined still)
  //map to the nested elements, the index of the array they are in + 1 multiplied by their index + 1
  //result is a multiplication table of length and depth of "size"
  
}

//return
//array
//with 1 lvl nested array
//each element in array is a multiplication list
//list is to n length and array is n length

// [[1,2,3],[2,4,6],[3,6,9]]
// Test.assertSimilar(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);