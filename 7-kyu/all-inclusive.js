function containAllRots(strng, arr) {
  let hold = []
  let str = strng.split("")
  for(let i = 0; i < strng.length; i++){
    hold.push(str.join(""))
    str.push(str.shift())
  }
  return hold.every(x => arr.includes(x))
}