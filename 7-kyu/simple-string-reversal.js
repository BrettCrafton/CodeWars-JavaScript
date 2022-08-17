//given a str
//str contains only lowercase and spaces

function solve(str){
  //create an array of indexes of spaces in input str, filter, and subtract current index from each
  //split str at spaces, filter non spaces, reverse, then map a new space to char if index is in array of indexes above
  //split str by char, and map across, if index is included in array of indexes, add space to beginning of element
  //join back together, tern for last char being a space and add
  //return
  //this is an abuse of methods
  //simple loop would be way more efficient
  
  let arr = str.split("").map((x,i) => x == " " ? i : "").filter(x => x != "").map((x,i) => x-i)
  return str.split("").filter(x => x!= " ").reverse().map((x,i) => arr.includes(i) ? " " + x : x).join("") + ( str.endsWith(" ") ? " ": "")
}

//return a str
//str is the reverse of argument
//but with spaces left in current place

// solve("our code") = "edo cruo"
// -- Normal reversal without spaces is "edocruo". 
// -- However, there is a space at index 3, so the string becomes "edo cruo"

// solve("your code rocks") = "skco redo cruoy". 
// solve("codewars") = "srawedoc"