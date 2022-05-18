function calculateTip(amount, rating) {
  switch (rating.toLowerCase()) {
    case 'terrible':
      return 0;
    case 'poor':
      return Math.ceil(amount * .05);
    case 'good':
      return Math.ceil(amount * .1);
    case 'great':
      return Math.ceil(amount * .15);
    case 'excellent':
      return Math.ceil(amount * .2);
    default:
      return 'Rating not recognised';
  }
}