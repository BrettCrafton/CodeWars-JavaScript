function redistributeWealth(wealth) {
  wealth.fill(wealth.reduce((a, c) => a + c, 0) / wealth.length);
}