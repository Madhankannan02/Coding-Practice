function reverseString (strng) {
  let strngs = new String(strng);
  console.log(strngs);

  let newCharacter = "";
  let newstring = "";

  for (const item of strngs) {
    newCharacter = item;
    newstring = newCharacter + newstring;
  }

  return newstring;
}

console.log(reverseString("hello"));