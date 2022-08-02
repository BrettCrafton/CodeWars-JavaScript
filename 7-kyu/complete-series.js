function completeSeries(arr) {
  return [...new Set(arr)].length == arr.length? Array(Math.max(...arr) +1).fill().map((x,i) => i) : [0]
}