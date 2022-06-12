var lowerCaseLetters = (str)=> {
  return str.split("").filter(x => +x != x).map(x => x.toLowerCase() != x ? " " + x.toLowerCase() : x).join("").trim()
}