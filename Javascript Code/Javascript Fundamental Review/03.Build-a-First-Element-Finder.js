function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (func(element)) {
      return element;
    }
  }

  return undefined;
}