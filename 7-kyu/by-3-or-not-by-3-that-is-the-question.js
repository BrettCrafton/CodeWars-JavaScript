function divisibleByThree(str){
  while(String(str).length != 1){
    str = String(str).split("").reduce((a,c) => +a + +c)
  }
  return str == 3 || str == 6 || str == 9
}