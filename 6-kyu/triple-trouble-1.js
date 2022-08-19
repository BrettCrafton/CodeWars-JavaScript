//given 2 arguments, both numbers
//appears whole numbers
//postive
//numbers don't seem to have much bearing for solution, as just need chars

function tripledouble(num1, num2) {
  //convert to string noth nums
  //filter method on first num where next 2 char are equal, returns an array of all triples
  //some method on second num, of triples array, return 0 if none, otherwise 1
  
  
  let str1 = String(num1).split("")
  let str2 = String(num2).split("") 
  
  return str2.some((e,idx, arr2) => str1.filter((x,i,arr) => x == arr[i +1] && x == arr[i +2]).includes(e) && arr2[idx + 1] == e) ? 1 : 0
}

//return
//0 or 1
//1 if first number has 3 of the same numbers consecutively && second number has that same number twice consecutively
//otherwise 0

// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1