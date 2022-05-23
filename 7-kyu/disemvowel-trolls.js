function disemvowel(str) {
  let array = []  
  str.split("").forEach((letter) => letter != 'a' && letter != 'e' && letter != 'i' && letter != 'o' && letter != 'u' &&letter != 'A' && letter != 'E' && letter != 'I' && letter != 'O' && letter != 'U' ? array.push(letter) : null)         
  return array.join("");
}