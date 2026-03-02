function chunkArrayInGroups(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));