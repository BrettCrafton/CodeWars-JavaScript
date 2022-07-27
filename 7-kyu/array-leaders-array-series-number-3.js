function arrayLeaders(numbers){
  return numbers.filter((x,i) => x > numbers.slice(i+1).reduce((a,c) => a+c, 0) ) 
}