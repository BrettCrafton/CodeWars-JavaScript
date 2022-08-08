function wordsToMarks(string){
  return string.split('').reduce((a,c)=> a + c.charCodeAt()-96,0);
}