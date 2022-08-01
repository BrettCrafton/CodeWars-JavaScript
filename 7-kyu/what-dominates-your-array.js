function dominator(arr) {
  let obj = arr.reduce((a,c) => (a[c] = a[c] + 1 || 1,a),{})
  let largest = Math.max(...Object.values(obj))
   return largest > arr.length /2 ? +Object.keys(obj).find(key => obj[key] === largest) : -1
}