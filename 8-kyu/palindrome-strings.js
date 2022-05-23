function isPalindrome(line) {
  return String(line).split('').reverse().join('') == line;
}