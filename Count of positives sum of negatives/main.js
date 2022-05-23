function countPositivesSumNegatives(input) {
    if(input == null || input.length < 1){
        return []
    }
    else{
    let countOfPostives = input.filter( x => x > 0)
    let sumOfNegatives = input.filter( x => x < 0).reduce((a,b) => a + b, 0)
    return [countOfPostives.length, sumOfNegatives];
    }
}

OR

function countPositivesSumNegatives(input) {
    let arrayAnswer = input && input.length ? [input.filter(x => x > 0).length, input.filter( y => y < 0).reduce((item1, item2) => item1 + item2,0) ]: []
            return arrayAnswer;
    }
