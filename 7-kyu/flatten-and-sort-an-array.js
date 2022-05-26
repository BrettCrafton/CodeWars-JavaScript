"use strict";

function flattenAndSort(array) {
  return array.reduce((acc,el) => acc.concat(el),[]).sort((a,b)=>a-b);
  
}