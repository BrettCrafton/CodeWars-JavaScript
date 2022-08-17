function evenOrOdd(str) {
  let value = str.split("").reduce((a,c) => a + (c % 2 ? -c :+c), 0)
  return value == 0 ? 'Even and Odd are the same' : value < 0 ? 'Odd is greater than Even' : 'Even is greater than Odd'
}