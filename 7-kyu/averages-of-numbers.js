function averages(numbers) {
  return !numbers ? [] : numbers.map((x, i, arr) => (x + arr[i+1]) / 2).slice(0, numbers.length -1)
}