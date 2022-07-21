function count (string) {  
   return string.split("").reduce((a,c) => (a[c] = a[c] + 1 || 1,a),{})
}