function vowel2index(str) {
  let vowels = "aeiouAEIOU".split("")
  return str.split("").map((x, i) => vowels.includes(x) ? i + 1 : x).join("")
}