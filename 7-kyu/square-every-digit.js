function squareDigits(num){
  let squareArray = Array.from(String(num), Number => Number *= Number )
  
  return Number(squareArray.join(''));
}