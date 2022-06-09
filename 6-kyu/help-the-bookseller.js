//given an array
//array is list of strings
//each string contains a code at beginning and a str number at end that defines quantity, seperated by a space
//this is a library coding for books

//also give a second array
//this array strings with a letter
//these are the catagories wanted

//all char are uppercase
//all str number are whole and positive

function stockList(listOfArt, listOfCat){
  //won't be fast but
  //make hold array
  
  //loop
  //filter by each code
  //map the slice of index of " " to end
  //reduce array
  //push value into holding array
  
  //map in hold array, (code : x)
  //join with " - "
  //return this string or ""

  let arr = []
  
  for(let i = 0; i < listOfCat.length; i++){
    arr.push(listOfArt.filter(x => x[0] == listOfCat[i]).map(x => x.slice(x.indexOf(" ") +1)).reduce((a,c)=> a+ +c, 0))
  } 
  
  return listOfArt.length && listOfCat.length ? arr.map((x, i) => `(${listOfCat[i]} : ${x})`).join(" - ") : ""
}

//return
//a single string
//str contains each catagory and the quantity of books in that catagory
//str has specificy format of "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
//if list or codes are empty str, return ""


// b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
// c = ["A", "B"]
// res = "(A : 200) - (B : 1140)"
// Test.assertEquals(stockList(b, c), res)

// b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
// c = ["A", "B", "C", "W"]
// res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
// Test.assertEquals(stockList(b, c), res)