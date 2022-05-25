//given string
//string looks like it is going to get a little of everything thrown at it


function validPhoneNumber(phoneNumber){
  //simple
  
  //check for length of 14
  //check if index 0 and 4 are ( )
  //check if index 5 is " "
  //check if index 9 is -
  
  //likely fail further testing with non digit numbers in other section but check cases later
//   phoneNumber.length == 14
//   phoneNumber.charAt(0) == "("
//   phoneNumber.charAt(4) == ")"
//   phoneNumber.charAt(5) == " "
//   phoneNumber.charAt(9) == "-"
  
  return phoneNumber.length == 14 && phoneNumber.charAt(0) == "(" && phoneNumber.charAt(4) == ")" && phoneNumber.charAt(5) == " " && phoneNumber.charAt(9) == "-"



}

//return
//boolean
//based on if string is in proper format of (xxx) xxx-xxxx
//all other formats or improper char should return false
//does not actually check if phone number based on digits is correct, just in proper format


// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false