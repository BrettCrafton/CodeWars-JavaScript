//given str
//str can be empty
//str will contain _ or - (delimiter)
//upper and lowercase

function toCamelCase(str){
  //variable set to delimiter (tern)
  //use variable to split str at delimiter and create array
  //map accross array to change starting letter (charAt), add rest of str with slice
  //use tern to determine if first word via index, if so just return with no modification
  //join array back together
  
  //tern to dermine if str.length holds length, if not then just return str
  
  let d = str.includes("-") ? "-" : "_"
  return str.length ? str.split(d).map((x,i) => i ==0 ? x : x[0].toUpperCase() + x.slice(1) ).join("") : str
}

//return
//a string
//string will be converted to camel case from previous
//if string started with uppercase, convert to upper camel case (pascal case)
//if str is empty, return empty str

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"