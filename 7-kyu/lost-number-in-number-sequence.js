function findDeletedNumber(arr, mixArr) {
return arr.find(x => !mixArr.includes(x)) || 0
}