function productArray(numbers){
  return numbers.map((x,i) => numbers.reduce((a,c) => a * c)/x)
}