//given str
//str is string
//str length is variable
//does not appear to have to deal with wrong types

function solution(str){
  //create holder arr
   //grab str
  //loop looks like easiest solution
  //slice by 2 and push contents into new arr
  //small conditional for if <2 length push last char + "_" - changed to modifying str at start
  //return holder arr
  
  let arr = []
  if(str.length % 2 != 0) str += "_"
  
  for(let i = 0; i < str.length; i += 2){
    arr.push(str.slice(0 + i, 2 + i))
  }
  
  return arr
}

//return
//an array
//array contains str elements of length 2, the 2 are char from str
//if length of str was odd, then last element has "_"char included

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']