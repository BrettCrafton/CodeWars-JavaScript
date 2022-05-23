//create findMissingLetter function
//given arguement that is an array
//array will only be alphabet characters
//can be lower or uppercase
//will always be given atleast 2 characters (length of 2)
//will always be a valid array
//will only ever be missing 1 letter
//english alphabet only, 26 letters


function findMissingLetter(array){
  //meth 1
  //create array of alphabet
  //lowercase array so only deal with lowercase, or lowercase each value as checked
  //create check array based on splicing from index of alphabet array of first char in arguement array
  //use 1 of many methods to determine when check array does not match arguement array
  //then return that char from compare array, since char will not be in arguement array
  
  let alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("")
  let checkLowerCase = array[0].toLowerCase() == array[0]
  console.log(checkLowerCase)
  //checkLowerCase will return true if original array was lowercase, false if uppercase
  let arrayLowerCase = array.map(x => x.toLowerCase())
  console.log(arrayLowerCase)
  let startCheck = alphabetArr.indexOf(arrayLowerCase[0])
  console.log(startCheck)
  let compareArr = alphabetArr.splice(startCheck)
  console.log(compareArr)
  //easy way is loop till not equal
  let counter = 0
  while(compareArr[counter] == arrayLowerCase[counter]){
    counter++
  }
  return checkLowerCase ? compareArr[counter] : compareArr[counter].toUpperCase()
}
//return value
//value will be a string of 1 character that is missing
//should match case of original array


// findMissingLetter["a","b","c","d","f"] "e"
// findMissingLetter["O","Q","R","S"] "P"