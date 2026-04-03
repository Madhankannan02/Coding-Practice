const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const MAX_CHARS = 50;

textInput.addEventListener("input", () => {
  let content = textInput.value;

  if (content.length >= MAX_CHARS) {
    textInput.value = content.substring(0, MAX_CHARS);
    content = textInput.value;
    charCount.classList.add("limit-reached");
  } else {
    charCount.classList.remove("limit-reached");
  }
  charCount.textContent = `Character Count: ${content.length}/${MAX_CHARS}`;
});