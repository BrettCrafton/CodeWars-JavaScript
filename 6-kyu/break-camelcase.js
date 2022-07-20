// complete the function
function solution(string) {
    return string.split("").map(x => x.toLowerCase() != x ? " " + x : x).join("")
}