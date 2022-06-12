function sumNumbers() {
  return [...arguments].filter(x => typeof x == "number").reduce((a,c) => a+c, 0) 
}