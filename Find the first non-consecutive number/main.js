function firstNonConsecutive (arr) {
    return arr.reduce((acc, n, i, src) => {
       if(n !== src[i-1] + 1 && !acc && i !=0) return n;
       return acc;
     }, null);
   }