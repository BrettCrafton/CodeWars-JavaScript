function minimumSteps(numbers, value){
  numbers.sort((a,b) => a -b)
  let total = numbers[0]
  let counter = 1
  while(value >total){
    total+=numbers[counter]
    counter++
  }
  return numbers[0] > value ? 0 : counter -1
}