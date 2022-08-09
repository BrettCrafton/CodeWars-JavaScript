var findDigit = function(num, nth){
    return nth > 0 ? Number(String(num).split("").reverse()[nth -1]) || 0: -1
}