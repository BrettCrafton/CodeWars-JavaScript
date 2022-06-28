function XO(str) {
  let arr = str.toLowerCase().split("")
    return arr.filter(x => x == "x").length == arr.filter(x => x == "o").length
}