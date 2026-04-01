function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  
  const range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  let multiple = max;
  let found = false;

  while (!found) {
    found = range.every(num => multiple % num === 0);
    
    if (!found) {
      multiple += max;
    }
  }

  return multiple;
}