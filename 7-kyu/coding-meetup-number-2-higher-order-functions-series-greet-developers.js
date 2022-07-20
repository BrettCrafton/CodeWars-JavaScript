function greetDevelopers(list) {
  list.forEach((x,i,arr) => x.greeting = `Hi ${arr[i].firstName}, what do you like the most about ${arr[i].language}?`)
  return list
}