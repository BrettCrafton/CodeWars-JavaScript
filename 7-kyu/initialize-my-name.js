function initializeNames(name){
  return name.split(" ").map((x,i, arr) => i == 0 || i == arr.length -1 ? x : x.charAt() + "." ).join(" ")
}