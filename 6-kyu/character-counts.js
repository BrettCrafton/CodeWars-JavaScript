/**
 * Returns the number of times the given character appears in the string,
 * or if more than one character is supplied an array of character counts.
 */
String.prototype.characterCount = function (charsToCount) {
  if(charsToCount){
    let arr = []
    let chars =  Array.isArray(charsToCount) ? charsToCount : charsToCount.split("")
    let charCount = this.split("").reduce((a,c) => (a[c] = a[c] + 1 || 1,a),{})
    chars.forEach(x => arr.push(charCount[x]))
    return arr.length == 1 && arr[0]? arr[0] : arr.length == 1 ? 0 : arr.map(x => x ? x : 0)
  }
  else{
    return undefined
  }
};