function vowelIndices(word){
  let splitArr = word.toLowerCase().split("")
  let vowels = [..."aeiouy"]
  let indexArr = []
  splitArr.filter((element, index) => vowels.includes(element) ? indexArr.push(index + 1) : null )
  return indexArr
}