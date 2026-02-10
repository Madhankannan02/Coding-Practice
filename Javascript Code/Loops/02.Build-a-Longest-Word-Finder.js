function findLongestWordLength (sentence){
  const word = sentence.trim().split(" ");
  let bigWord = "";

  for (let i = 0; i < word.length; i++){
    if (word[i].length >= bigWord.length){
      bigWord = word[i];
    }else {
      continue;
    }
  }
  return bigWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));