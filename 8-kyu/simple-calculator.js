function calculator(a,b,sign){
  var result = 0;
  switch(sign){
    case'+': result = a + b
      break;
    case'-': result = a - b;
      break
    case'/': result = a / b;
      break
    case'*': result = a * b;
      break
    default:
      result = "unknown value"
  }
 return typeof a !== "number" || typeof b !== "number" ? "unknown value" : result;


}