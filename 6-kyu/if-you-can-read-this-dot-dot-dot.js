function to_nato(words) {
  let arr = ",.!?".split("")
	return words.split("").filter(x => x != " ").map(x => arr.includes(x) ? x : NATO[x.toLowerCase()]).join(" ")
}