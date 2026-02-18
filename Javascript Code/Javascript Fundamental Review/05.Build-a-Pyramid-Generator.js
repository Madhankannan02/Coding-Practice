function pyramid(char, rows, inverted) {
  let result = "\n";
  const rowList = [];

  for (let i = 1; i <= rows; i++) {
    const spaces = " ".repeat(rows - i);
    const pattern = char.repeat(2 * i - 1);
    
    rowList.push(spaces + pattern);
  }

  if (inverted) {
    rowList.reverse();
  }
  return "\n" + rowList.join("\n") + "\n";
}