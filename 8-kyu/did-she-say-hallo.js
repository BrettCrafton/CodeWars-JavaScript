function validateHello(greetings) {
  return greetings.toLowerCase().replace(/[^a-z' ']/g, "").split(" ").some(x => ["hello", "ciao", "salut", "hallo","hola","ahoj","czesc"].includes(x))
}