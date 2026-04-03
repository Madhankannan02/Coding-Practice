const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  let content = textInput.value;

  if (content.length >= 50) {
    textInput.value = content.substring(0, 50);
    content = textInput.value;
    charCount.style.color = "red";
  } else {
    charCount.style.color = "black";
  }

  charCount.textContent = `Character Count: ${content.length}/50`;
});