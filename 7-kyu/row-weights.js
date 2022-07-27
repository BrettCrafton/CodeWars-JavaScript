function rowWeights(array){
  return [array.filter((x,i) => i %2 == 0).reduce((a,c) => a+c, 0), array.filter((x,i) => i%2).reduce((a,c) => a+c, 0)]
}