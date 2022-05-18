function isVow(a){
  return a.map(x => x == 97  ? x = "a" :
                    x == 101 ? x = "e" :
                    x == 117 ? x = "u" :
                    x == 105 ? x = "i" :
                    x == 111 ? x = "o" :
                    x = x
              )
}