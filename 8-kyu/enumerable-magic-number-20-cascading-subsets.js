function eachCons(array, n) {
    let arr = [];
    for (let i = 0; i <= (array.length - n); i++) {
    arr.push(array.slice(i , i+n) )
    }
      
	return arr;
}