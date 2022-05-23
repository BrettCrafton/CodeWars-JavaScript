//given number
//could be negative or even in this case or 0
//no other cases

function diamond(n){
  //loop, 2?
  //add till i == n
  //then sub till i == 0
  //create array and fill with " " and *
  if(n % 2 == 0 || n < 0){
    return null
  }
  else{
    let Counter = 0
    let arrAst = Array(n).fill("*")
    let result = []
    result.push(arrAst.join("") + "\n")

    while(Counter + 1 < (n / 2)){ 
      arrAst[Counter] = " "
      arrAst.pop()
      result.push(arrAst.join("") + "\n")
      result.unshift(arrAst.join("") + "\n")
      Counter++    
    }
    return result.join("")
  }
}

//return
//a "diamond" made of * and spaces
//only if n is not negative, or even

// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"