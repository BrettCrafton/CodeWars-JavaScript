function babySharkLyrics(){
  let a=[],s=" shark",n=["Baby"+s,"Mommy"+s,"Daddy"+s,"Grandma"+s,"Grandpa"+s,"Let's go hunt"],d="doo ".repeat(6).trim(),p=0
  for(let i=1;i<=24;i++){i%4?a.push(`${n[p]}, ${d}`):a.push(`${n[p]}!`) && p++}
  a.push("Run away,…")
  return a.join("\n")
}