function isValid(f){
  let test12 = f.includes(1) && f.includes(2) ? false : true
  let test34 = f.includes(3) && f.includes(4) ? false : true
  let test56 = f.includes(5) == f.includes(6)
  let test78 = f.includes(7) || f.includes(8)
  return test12 && test34 && test56 && test78
}