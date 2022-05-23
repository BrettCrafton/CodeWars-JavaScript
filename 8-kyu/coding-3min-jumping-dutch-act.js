function sc(floor){
  let speak
  if(floor <= 1){
    speak = ""
  }
  else if(floor <= 6){
    speak = Array(floor - 1).fill("Aa~ ")
    speak.push("Pa! Aa!")
    speak = speak.join("")
  }
  else{
    speak = Array(floor - 1).fill("Aa~ ")
    speak.push("Pa!")
    speak = speak.join("")

  }
  return speak
}