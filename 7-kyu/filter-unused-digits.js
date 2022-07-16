function unusedDigits() {
  let arr = "0123456789".split("")
  let args = [...arguments].map(x => String(x)).join("").split("")
  return arr.filter(x => !args.includes(x)).join("")
}