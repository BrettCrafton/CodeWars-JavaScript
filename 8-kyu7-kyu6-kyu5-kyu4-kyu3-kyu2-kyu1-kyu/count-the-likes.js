var evalLikes = function(words){
  return words.filter(x => x.toLowerCase() == "like").length / words.length > .05
}