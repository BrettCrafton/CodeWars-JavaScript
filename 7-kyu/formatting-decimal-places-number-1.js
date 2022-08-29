function twoDecimalPlaces(number) {
  let arr = String(number).split(".")
  return +(arr[0] + "." + arr[1].slice(0,2))
}