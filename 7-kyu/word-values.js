function wordValue(a) {
  return a.map((x,i) => x.split("").filter(x => x != " ").map(e => (e.charCodeAt() % 97) +1).reduce((a,c) => a+ c, 0) * (i + 1))
}