function doubleEveryOther(a) {
  return a.map((x, i) => i % 2 ? x * 2 : x);
}