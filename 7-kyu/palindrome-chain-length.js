var palindromeChainLength = function(n) {
  let count = 0
  while(n != String(n).split("").reverse().join("")){
    n = n + +String(n).split("").reverse().join("")
    count++
  }
  return count
};