//given string of words
//words seperated by a space
//different cases possible

function toWeirdCase(string){
  //split string intro array of words
  //split each word in array, into array of letters? possible to use charAt() instead?
  //cap even indexes only
  //join array of arrays into string
  
//   let arr = string.split(" ")
//   let charArr = arr.map(x => x.split("").map((x,i)=> i % 2 == 0 ? x.toUpperCase() : x).join("")) 
//   return charArr.join(" ")
  
  //one line
  return string.split(" ").map(x => x.split("").map((x,i)=> i % 2 == 0 ? x.toUpperCase() : x).join("")).join(" ")
}
//return
//string, same as original other then every even case is cap
//restarts on each word

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"