//given a number
//number will be greater than 0, and whole
//no other inputs

function expandedForm(num) {
  //break number into array of digits (convert to string)
  //index is equal to the number of 0's after number
  //filter array after for elements that are not equal to 0
  //join array with " + "
  //return that
  //need a double reverse, (could also use sort since numbers)
  //then condense, because why not when it can be one lined.
  
  return String(num).split("").reverse().map((x,i) => x + "0".repeat(i)).filter(x => x != 0).reverse().join(" + ")
}

//return
//a string
//number broken into expanded form and seperated by spaces and +


// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'