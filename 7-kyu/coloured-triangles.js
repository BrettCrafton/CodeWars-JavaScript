//string
//string only contains uppercase GRB
//string length is random, and letters of GRB are random

function triangle(row) {
  //recursion
  //divide string into array of pairs
  //run through a helper function of pairs?
  //return array joined with new letters
  //recurse until length of 1
  if(row.length == 1){
    return row
  }
  else{
    let arr = spliter(row)
    let list = arr.map(x => match(x))
    return triangle(list.join(""))
  }
}

function match(el){
  let colors = ["R", "G", "B"]
  if(el[1]){
    return el[0] == el[1] ? el[0] : colors.find(x => !el.split("").includes(x) )
  }
  else{
    return el[0]
  }
}

function spliter(str){
  let chunks = []
  for (var i = 0, charsLength = str.length; i < charsLength; i ++) {
      chunks.push(str.substring(i, i + 2));
  }
  return chunks.slice(0, chunks.length -1)
}


//return
//string
//of single char
//that is last color in the algo

// Test.assertEquals(triangle('GB'), 'R');
// Test.assertEquals(triangle('RRR'), 'R');
// Test.assertEquals(triangle('RGBG'), 'B');
// Test.assertEquals(triangle('RBRGBRB'), 'G');
// Test.assertEquals(triangle('RBRGBRBGGRRRBGBBBGG'), 'G');
// Test.assertEquals(triangle('B'), 'B');