function isSortedAndHow(array) {
  let answer
  if(array.toString() == array.concat().sort((a,b) => a-b).toString()){
    answer = 'yes, ascending'
  }
  else if(array.toString() == array.concat().sort((a,b) => b-a).toString()){
    answer = 'yes, descending'
  } 
  else{
    answer = "no"
  }
  return answer
}