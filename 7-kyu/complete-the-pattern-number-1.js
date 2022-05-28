function pattern(n){
 var output=[];
 for(let i=1;i<=n;i++)
   output.push(String(i).repeat(i));
 return output.join('\n');
}