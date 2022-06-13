function abbreviateLastnames(string, lastnames=1) {
  let prep = ["de", "do", "da", "dos", "das", "el"]
  let split = string.split(" ")
  let last = split.splice(-lastnames, lastnames)
  string = split.map((x, i, arr) => i != 0 && !prep.includes(x) ? x[0] + "." : x)
  return string.concat(last).join(" ")
}