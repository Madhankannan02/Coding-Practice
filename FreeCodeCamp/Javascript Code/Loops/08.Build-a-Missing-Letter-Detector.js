function fearNotLetter (strng) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let strngs = strng.toLowerCase();

  let startingLetter = alpha.indexOf(strngs[0]);
  console.log(startingLetter);
  //console.log(strngs[startingLetter]);

  //let startingNewString = alpha.split(startingLetter);
  //console.log(startingNewString);


  let endingLetter = alpha.indexOf(strng[strng.length-1]);
  console.log(endingLetter);
  //console.log(strngs[strngs.length-1]);

  /*for (let i=startingLetter; i<=endingLetter; i++){
    if (alpha[i] === strngs[i]){
      console.log(strngs[i]);
      console.log(alpha[i]);
      continue;
    } else {
      //console.log(strngs[i]);
      //console.log(alpha[i]);
      return alpha[i];
    }
  }*/

  let newString = "";
  for (let i=startingLetter; i<=endingLetter; i++){
    newString += alpha[i];
  }
  console.log(newString);

  for (let i = 0; i<=newString.length; i++){
    if (newString[i] === strngs[i]){
      //console.log(newString[i]);
      //console.log(alpha[i]);
      continue;
    } else {
      //console.log(strngs[i]);
      //console.log(alpha[i]);
      return newString[i];
    }
  }
}

//console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"));