//given 2 matrix (nested arrays)
//elements in matrix appear to be all numbers, whole? positive? (not sure it matters)
//matrix are equal size and depth, but can be any size a depth

function matrixAddition(a, b){
  //init an array of arrays to hold answer
  //
  //loop should be easiest
  //let answer element = a element + b element
  //or....
  //just do the same solution for the multiplication table
  
  return [...Array(a.length)].map((_, i) => [...Array(a[0].length)].map((__, iN) => a[i][iN] + b[i][iN]))
}

//return 
//the matrix's parts summed to a new matrix
//(array of nested arrays)
//same size and depth of given matrix

// matrixAddition(
//   [ [1, 2, 3],
//     [3, 2, 1],
//     [1, 1, 1] ],
// //      +
//   [ [2, 2, 1],
//     [3, 2, 3],
//     [1, 1, 3] ] )

// // returns:
//   [ [3, 4, 4],
//     [6, 4, 4],
//     [2, 2, 4] ]