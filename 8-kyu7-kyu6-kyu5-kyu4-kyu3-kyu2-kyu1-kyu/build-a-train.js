function train(s) {
  let car
  switch(s[0]){
      case "A": car = 15 
      break
      case "B": car = 10 
      break
      case "C": car = 7 
      break
      case "D": car = 8
  }
  return car + (s.length -1) * 5
}