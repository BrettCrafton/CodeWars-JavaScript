function contamination(text, char){
  return text.split('').map(x => x = char).join('')
}