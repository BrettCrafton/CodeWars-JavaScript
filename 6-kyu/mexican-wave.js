//given a string
//string will always be lower case
//can also be empty
//will have spaces that need special attention
//for end goal, should I expect special characters or things that are not english alphabet? things that can't be cap?

function wave(str){
  //create result array
  
  //loop sounds easiest
  //loop based on str.length
  //at start of loop make a variable = to str that i utilize for pushing? otherwise each time it loops will have previous changes included
  
  //use conditional to check if char at index i is " ", if it is, i++ to increase count and then do index to cap
  //if not, then just use i
  
  //push above into result array
  //return array
  
  let arr = []
  let pushStr
  if(str == ""){
    return arr
  }
  else{
    for(let i = 0; i < str.length; i++){
      pushStr = str
      if(pushStr.charAt(i) == " "){
        while(pushStr.charAt(i) == " "){i++}
        if(i != str.length){ arr.push(pushStr.slice(0, i) + pushStr.charAt(i).toUpperCase() + pushStr.slice(i + 1))}
      }
      else{
        arr.push(pushStr.slice(0, i) + pushStr.charAt(i).toUpperCase() + pushStr.slice(i + 1))
      }
    }
     return arr
  }
}

//return
//an array
//each index of array will capatalise the next letter in the string
//will need to skip spaces

//if str is empty, return empty array


//wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]