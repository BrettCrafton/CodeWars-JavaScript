function punctuation(str){
  console.log(str)
  if(str == ""){
    return 'missing answer'
  }
  else if(!str.split(". ").every((x, i, arr) => x[0].toUpperCase() == x[0] || arr[i-1].endsWith(".") )){
    return 'no marks'
  }
  else{
    return 'full marks'
  }
}