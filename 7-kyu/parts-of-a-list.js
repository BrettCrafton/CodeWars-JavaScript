function partlist(arr) {
  let response = arr.map((x,i,) => [arr.slice(0, i + 1).join(" "), arr.slice(i + 1).join(" ")] )
  response.pop()
  return response
}