function lastDigit(arr) {
  let r = +(arr.filter(x => typeof x == "number" && !String(x).includes(".")).pop() + "").slice(-1)
  return r ? r : r == 0 ? 0 : 'No integers found.'
}