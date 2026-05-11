function addTogether() {
  const [first, second] = arguments;

  if (typeof first !== "number") {
    return undefined;
  }

  if (arguments.length === 2) {
    return typeof second === "number"
      ? first + second
      : undefined;
  }

  return function (next) {
    return typeof next === "number"
      ? first + next
      : undefined;
  };
}