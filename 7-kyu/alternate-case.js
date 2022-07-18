function alternateCase(s) {
  return s.split('').map(x => x.toLowerCase() == x ? x.toUpperCase() : x.toLowerCase()).join('');
}