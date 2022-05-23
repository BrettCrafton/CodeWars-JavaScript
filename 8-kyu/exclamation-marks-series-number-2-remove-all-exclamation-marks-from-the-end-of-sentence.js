function remove (string) {  
  let splitArr = string.split("")
  return splitArr.slice(splitArr.reverse().findIndex(x => x != "!"), splitArr.length).reverse().join("")
}