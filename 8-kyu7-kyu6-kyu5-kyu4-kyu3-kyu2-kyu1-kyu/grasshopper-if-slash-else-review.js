function main(input) {
  if (input == 'forward') return forward();
  else if (input == 'backward') return backward();
  else return 'Not a valid input.';
}