function explode(s) {
  return s.split('').map(x => x.repeat(x)).join('');
}