function add(num1, num2) {
  let x = String(Math.max(num1, num2)).split("").reverse()
  let y = String(Math.min(num1, num2)).split("").reverse()
  return  +x.map((e, i) => +e + (+y[i] || 0)).reverse().join("")
}