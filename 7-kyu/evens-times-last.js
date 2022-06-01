function evenLast(numbers) {
  console.log(numbers)
  return !numbers.length ? 0 : numbers.filter((_, i) => i % 2 == 0).reduce((a,c) => a + c, 0) * numbers[numbers.length -1] 
}