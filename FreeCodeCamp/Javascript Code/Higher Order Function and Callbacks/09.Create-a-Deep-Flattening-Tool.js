function steamrollArray(arr) {
  let flattenedArray = [];

  //console.log(arr)

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      //console.log(arr[i])
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }

  return flattenedArray;
}

console.log(steamrollArray([1, [], [3, [[4]]]]));