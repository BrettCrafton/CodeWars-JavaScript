function alphabetti(str) {
return str.toLowerCase().split("").sort().map(x=> !str.includes(x)? x.toUpperCase():x).join("")
}