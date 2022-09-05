var paintLetterboxes = function(start, end) {
  let arr = Array(end - start + 1).fill(start).map((x,i) =>String(x + i)).join("").split("").sort().reduce((a,c) => (a[c] = a[c] + 1 || 1, a), {})
  return Array(10).fill().map((_,i) => arr[i] || 0)
}