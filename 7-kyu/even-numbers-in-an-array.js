function evenNumbers(array, number) {
return array.filter(x => x % 2 == 0).reverse().slice(0,number).reverse()
}