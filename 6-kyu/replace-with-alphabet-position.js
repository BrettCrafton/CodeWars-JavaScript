function alphabetPosition(text) {
  return text.toLowerCase().replace(/[\W\d_]/ig, "").split('').map(x=> x.charCodeAt(0) - 96).join(' ')
}