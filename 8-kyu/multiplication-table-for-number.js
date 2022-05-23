function multiTable(number) {
  let array = [1,2,3,4,5,6,7,8,9,10]
  let stringArr = array.map(x => x = `${x} * ${number} = ` + x * number)
  return stringArr.join("\n")
}