function scramble(str, arr) {
  let res = Array(arr.length)
  arr.forEach((x,i) => res[x] = str[i])
  return res.join("")
};