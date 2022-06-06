//array of words
//words are colors, appears only words given in array
//doeesn't specify limitations on colors??

function numberOfPairs(gloves){
  //take array
  //create object from array with values equal to amount of times each color occurs
  //divide each value by 2 and floor it
  //sum all values
  
  const counts = {};
  for (const num of gloves) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return Object.values(counts).reduce((a,c) => a + (Math.floor(c/2)), 0)
}

//return a number
//number is equal to number of pairs of same color in array
//return whole number

// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)