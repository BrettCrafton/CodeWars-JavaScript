//given a string
//string contains words seperated by spaces
//lowercase letters only
//all inputs valid


function high(x){
  //take str
  //split by spaces to array
  //map across array
  //split each word into char, convert char to number via charCodeAt, reduce to a number
  //math.max array to get largest
  //find index of largest
  //return index of split array word
  //slow but should work
  
  let words = x.split(" ")
  let values = words.map(x => x.split("").reduce((a,c) => a + (c.charCodeAt() -96), 0 ))
  let index = values.findIndex(x => x == Math.max(...values))
  
  return words[index]
}

//return
//a string
//string is the word that had the highest value based on char of alphabet
//normal value ascension

//     assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
//     assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano'); 
//     assert.strictEqual(high('take me to semynak'), 'semynak');