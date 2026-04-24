function uniteUnique(...arrays) {
  const combinedArray = [].concat(...arrays);
  return [...new Set(combinedArray)];
}