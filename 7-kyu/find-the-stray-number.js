function stray(numbers) {
  console.log(numbers)
  let sort = numbers.sort()
  let u = [...new Set(numbers)]
  return u[0] == sort[0] && u[0] == sort[sort.length-1] ? u[0] : u[1] == sort[1] && u[1] == sort[sort.length-1] ? u[0] : u[1]
}