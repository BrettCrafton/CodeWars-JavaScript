function cubeOdd(arr) {


return arr.every(x => typeof x == "number") ? arr.reduce((a,c) => a + (c % 2 != 0 ? Math.pow(c, 3) : 0), 0) : undefined
}