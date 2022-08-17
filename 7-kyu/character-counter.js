function validateWord(s){
  let obj = s.toLowerCase("").split("").reduce((a,c) => (a[c] = a[c] + 1 || 1,a), {})
  return Object.values(obj).every((x, _, arr) => x == arr[0])
}