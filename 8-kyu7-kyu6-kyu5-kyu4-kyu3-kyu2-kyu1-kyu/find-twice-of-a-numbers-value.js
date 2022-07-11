function twiceOfANumber(addedValue, totalValue) {
  return [...arguments].some(x => typeof x == 'boolean') ? null : (totalValue - addedValue) / 2
}