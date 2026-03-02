function confirmEnding (strng, strngCheck){
  let lastIndex = strng.length;
  //console.log(lastIndex);

  let lastIndexofStrng = strngCheck.length;
  //console.log(lastIndexofStrng);

  let lastLetter = strng.slice(lastIndex-lastIndexofStrng,lastIndex);

  return (lastLetter === strngCheck);
}

confirmEnding("Bastian", "n");
confirmEnding("Congratulation", "on")
confirmEnding("Connor", "n")
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")