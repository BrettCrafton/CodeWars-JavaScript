function dashatize(num) {
  let  str = String(Math.abs(num)).split("").map(x => x % 2? "-" + x + "-" : x).join("").split("--").join("-").split("")
  console.log(str[0])
  if(str[0] == "-") str.shift()
  if(str[str.length - 1] == "-") str.pop()
  return str.join("")
}