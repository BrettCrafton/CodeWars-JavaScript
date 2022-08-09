const orderedCount = function (text) {
  let obj = text.split("").map(x => x < 10 && x != " " ? String.fromCharCode(x) : x).reduce((a,c) => (a[c] = a[c] + 1 || 1,a), {})
  return Object.entries(obj).map(x => [(x[0].charCodeAt() < 10 ? String(x[0].charCodeAt()) : x[0]), x[1]] )
}