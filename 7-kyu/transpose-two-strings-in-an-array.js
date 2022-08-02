function transposeTwoStrings (array) {
  let arr = Array(Math.max(array[0].length, array[1].length)).fill()
	return arr.map((x,i) =>(array[0][i] || " ") + " " + (array[1][i] || " ") ).join("\n")
}