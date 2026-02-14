function repeatStringNumTimes(strng, num){
  let result = "";
  if (strng.length <= 0){
    return "";
  } else {
    for (let i = 1; i <= num; i++){
      result += strng;
      //console.log(strng);
    }
  }
  //console.log(result);
  return result
}

console.log(repeatStringNumTimes("abc", 3));