function expressionMatter(a, b, c) {
  if(a == 1 && b == 1 && c == 1){
    return 3
  }
  else if (a == 1 && c == 1){
    return a+b+c
  }
  else if(a == 1 && b == 1){
    return (a + b) * c
  }
  else if(b == 1 && c == 1){
    return a*(b+c)
  }
  else if(c == 1){
    return a*(b+c)
  }
  else if(a == 1){
    return (a + b) * c
  }
  else if (b==1 && a <= c){
    return (a + b) * c
  }
  else if (b==1 && a > c){
    return a*(b+c)
  }
  else{
  return a*b*c
    }
}