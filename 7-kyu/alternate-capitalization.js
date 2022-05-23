function capitalize(s){
  let splitArray = s.split('')
  let firstCase = splitArray.map((x, i) => i % 2 == 0 ? x.toUpperCase() : x )
  let secondCase = splitArray.map((x, i) => i % 2 == 0 ? x :  x.toUpperCase())
  return [firstCase.join(''), secondCase.join('')];
};