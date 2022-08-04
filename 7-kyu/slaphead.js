function bald(x){
  let head = x.split("")
  let hairs = head.filter(x => x == "/").length
  return [head.map(x =>"-").join(""), (!hairs ? "Clean!" : hairs == 1 ? "Unicorn!" : hairs == 2 ? "Homer!": hairs < 6 ? "Careless!":  "Hobo!")]
//   0 "Clean!"
// 1  "Unicorn!"
// 2 "Homer!"
// 3-5  "Careless!"
// 5  "Hobo!"
}