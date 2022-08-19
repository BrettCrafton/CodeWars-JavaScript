//2 strings
//first string is expected return but not in requested case
//second string is "list" of exceptions to the title case request, each word given with a space between

function titleCase(title, minorWords) {
  //grab both strings and reduce to lowercase and split at spaces
  //map across first, capitalizing ever first char unless word is in second list
  //then join and slice first letter and capitalize it, merging rest

  if(title){
      let arr = title.toLowerCase().split(" ")
      let list = minorWords? minorWords.toLowerCase().split(" ") : []

      let res = arr.map(x => list.includes(x) ? x : x[0].toUpperCase() + x.slice(1)).join(" ")
  
      return res[0].toUpperCase() + res.slice(1)
  }
  else{
    return ""
  }
}

//return
//first string argument given, but in "title case"
//first word is always capitalzed
//all other words are capitalized, unless in exception list
//reduce to lowercase if rest of letters are in upper

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'