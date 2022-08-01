function convertHashToArray(hash) {
	let arr = []
	 for (let keys in hash) {
		 arr.push([keys, hash[keys]])
	 }
	 return arr.sort()
}