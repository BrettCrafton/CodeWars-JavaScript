//given n
//n can be number or string
//needs to be interpreted as number
//can be 0, also looks like less than zero
//if improper, wants error thrown

//given v
//can be anything
//if v not given, array needs to fill with undefined

function prefill(n, v) {
  //create Array from, with .fill method, easy?
  //consider the edge cases presented and throw error
  //edge cases of 0, infinity, floats, variable types, boolean issues?
  //error needs to be an object with name and message properties

  if (n > 0  && n%1 == 0 && n != Infinity && typeof n != "boolean"){
     return Array(n).fill(v)
  }
  else if(n == 0 && typeof n != "boolean"){
    return []
  }
  else{
    throw {name: "TypeError",
           message: n + " is invalid"}
  } 
}

//return
//an array, of length n, filled with v

//if v not given, array filled with undefined
//if n not appropriate - less than zero, or not integer or integer string, throw TypeError of "n (the variable) is invalid"

//     prefill(3,1) --> [1,1,1]
    
//     prefill(2,"abc") --> ['abc','abc']
    
//     prefill("1", 1) --> [1]
    
//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]
      
//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"