var maxSequence = function(arr){
  let max = arr.reduce((a,c) => a+c, 0)
  let test = 0
  for(let i = 0; i < arr.length; i++){
    for(let p = 0; p < arr.length; p++){
      test = arr.slice(p, p+i).reduce((a,c) => a+c, 0)
      if(test > max) max = test
    }
  }
  return max
}