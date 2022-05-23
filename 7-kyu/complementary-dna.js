function DNAStrand(dna){
  //your code here
  //take string
  //break string into chars in array
  const startingArray = dna.split("")
  //swap particular chars in array to complements
  for(i=0; i < startingArray.length; i++){
    if(startingArray[i] == 'A'){
    startingArray[i] = startingArray[i].replace('A', 'T');
    }
    else if(startingArray[i] == 'T'){
    startingArray[i] = startingArray[i].replace('T', 'A');
      }
     else if(startingArray[i] == 'C'){
    startingArray[i] = startingArray[i].replace('C', 'G');
     }
     else if(startingArray[i] == 'G'){
    startingArray[i] = startingArray[i].replace('G', 'C');
     }
  }
  //dispay array into string

  //output new string
  return startingArray.join('')
}