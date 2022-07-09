function calcWaitForOJ(flavor, amount) {
  let wait = flavor == "Minty-Fresh" ? 37 : flavor == "Lemon-Sage" ? 15 : flavor == "Fruit-Fusion" ? 24 : 0
  return wait !== 0 && amount !== 0 ? `It's safe to drink OJ after ${Math.round(amount * wait)} minutes.`  : "It's safe to drink OJ now."
}