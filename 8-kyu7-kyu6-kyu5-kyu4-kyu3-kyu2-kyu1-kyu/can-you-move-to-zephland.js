function immigration(a) {
  return a.Zephlish * .03 + a.Math * .03 + (a.crime ? -3 : 0) + (a.investment.slice(0, a.investment.length - 3) > 1000000 ? 2 : 0) + (a.programmer? 2 : 0) > 6 ? "Welcome to Zephland!" : "Sorry, your application is rejected." ;
}