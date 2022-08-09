function addLetters(...letters) {
  let num = letters.reduce((a,c) => a+ (c.charCodeAt() - 96),0 ) % 26  + 96
  return num == 96 || !letters ? "z" : String.fromCharCode(num) 
}