var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let arr = []
   for(let i = 0; i <= count; i++){
     arr.push(i)
   }
    let sum = arr.reduce((a,b) => a+b, 0)
    return  count == 0 ? "0=0" : count < 0 ? `${count}<0` : arr.join("+") + " = " + sum
  };

  return SequenceSum;

})();