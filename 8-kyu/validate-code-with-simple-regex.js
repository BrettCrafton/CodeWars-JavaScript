function validateCode (code) {
  let str = String(code)
  return str[0] == 1 || str[0] == 2 || str[0] == 3
}