function caffeineBuzz(n){
  return (n %3 == 0 && n % 4  == 0 ? "Coffee" : n % 3 == 0 ? "Java" : "") +  (n % 2 == 0 && n % 3 == 0 ? "Script" : n % 3 != 0 ? "mocha_missing!" : "")
}