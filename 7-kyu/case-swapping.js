function swap(str) {
  return str.split('').map(x => (x.toLowerCase() == x) ? x.toUpperCase() : x.toLowerCase()).join('');
}