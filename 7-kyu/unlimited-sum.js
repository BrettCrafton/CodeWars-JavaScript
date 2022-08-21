function sum(){
  return [...arguments].reduce((a,c) => a + (typeof c == 'number' && c % 1 == 0 ? c : 0), 0)
}