function calculate(str) {
return String(str.split("plus").reduce((a,c) => a + (c.includes("minus") ? sub(c) : +c ), 0))
}

function sub(x){
  x = x.split("minus")
  return x.reduce((a,c) => a-c)
}