const factorial = (n, g = 1) => {
  if(n != 0){
     g *= n
    return factorial(--n, g)
  }
  else return g
};