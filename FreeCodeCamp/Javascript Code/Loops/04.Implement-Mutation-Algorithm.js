function mutation(arr) {
  const firstWord = arr[0].toLowerCase();
  const secondWord = arr[1].toLowerCase();

  for (let i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i]) === -1) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["hello", "hey"]));   // false
console.log(mutation(["Alien", "line"]));  // true