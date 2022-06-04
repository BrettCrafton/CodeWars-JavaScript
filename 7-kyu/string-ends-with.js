function solution(str, ending){
  return ending == '' ? true : str.slice(-(ending.length)) == ending;
}