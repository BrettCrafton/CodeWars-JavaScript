function increaseNumber(initialValue, finalValue) {
  console.log(arguments)
  return finalValue <= initialValue || isNaN(initialValue) || isNaN(finalValue) || initialValue == false ? null : finalValue - initialValue
}