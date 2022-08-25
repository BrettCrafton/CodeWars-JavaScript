function rot(strng) {
    return strng.split("\n").reverse().map(x => x.split("").reverse().join("")).join("\n");
}
function selfieAndRot(strng) {
    return strng.split("\n").map(x => x + ".".repeat(x.length)).join("\n") + "\n" + rot(strng).split("\n").map(x => ".".repeat(x.length) + x).join("\n")
}
function oper(fct, s) {
      return fct(s);
}