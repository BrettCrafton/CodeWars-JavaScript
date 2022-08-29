function spoonerize(words) {
  let arr = words.split(" ").map(x => x.charAt(0)).reverse()
  return words.split(" ").map((x, i) => arr[i] + x.slice(1)).join(" ")
}