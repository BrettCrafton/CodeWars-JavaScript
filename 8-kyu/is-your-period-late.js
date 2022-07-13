function periodIsLate(last, today, cycleLength){
Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};
  return last.addDays(cycleLength) < today;
}