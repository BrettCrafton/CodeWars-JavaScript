var repeatIt = function(str, n) {
   return typeof(str) == "string"? Array(n).fill(str).join(''): "Not a string";
  }