function encode(string) {
  let splitArr = string.split("")
  let vowelArr = [..."0aeiou"]
  let indexArr = []
  splitArr.filter((element, index) => vowelArr.includes(element) ? indexArr.push(vowelArr.indexOf(element)) : indexArr.push(element) )
  return indexArr.join("")
}

function decode(string) {
  return string.replace(/1/, "a").replace(/2/, "e").replace(/3/, "i").replace(/4/, "o").replace(/4/, "u")
}