function whichKind(name = 'friend of a friend', type = 'non-spicy') {
 if(name == "spicy") name = 'friend of a friend', type = "spicy"
 if(name == "non-spicy") name = 'friend of a friend'
  return {name: name, type: type}
}