function aliasGen(first, last){
  first = first.toUpperCase()
  last = last.toUpperCase()
  let arr = "ABCEDEFGHIJKLMNOPQRSTUVWXYZ".split("")
   return arr.includes(first.charAt(0)) && arr.includes(last.charAt(0)) ?  firstName[first.charAt(0)] + " " + surname[last.charAt(0)] : "Your name must start with a letter from A - Z."
}