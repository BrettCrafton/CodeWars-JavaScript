function correctPolishLetters (string) {
  let obj = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z"
  }
  let arr = string.split("")
  return   arr.map(x => x in obj ? obj[x] : x).join("")

}