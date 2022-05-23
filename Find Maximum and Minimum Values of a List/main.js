var min = function(list){
    let sortedList = list.sort((a,b) => a - b)
    return sortedList[0];
}

var max = function(list){
    let sortedList = list.sort((a,b) => b - a)
    return sortedList[0];
}