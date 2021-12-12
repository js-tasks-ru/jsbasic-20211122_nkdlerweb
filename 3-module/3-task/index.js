function camelize(str) {
  let upLetter = str.split('-');
  for(let i = 0; i < upLetter.length; i++)
  {
    if ( i == 0 ) 
      continue;
      let lettArr =  upLetter[i].split("");
      lettArr[0] = upLetter[i].charAt(0).toUpperCase();
      upLetter[i] = lettArr.join("");
  }
  str = upLetter.join("");
  return str;
}