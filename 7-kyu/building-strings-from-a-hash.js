function solution(pairs){
  return Object.entries(pairs).map(x=>x.join(' = ')).join(',')
}