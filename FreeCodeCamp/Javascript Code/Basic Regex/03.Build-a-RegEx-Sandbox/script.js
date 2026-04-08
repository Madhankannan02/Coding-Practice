const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

const getFlags = () => {
  let flags = "";
  if (caseInsensitiveFlag.checked) flags += "i";
  if (globalFlag.checked) flags += "g";
  return flags;
};

testButton.addEventListener("click", () => {
  const patternValue = regexPattern.value;
  const textValue = stringToTest.innerText;
  const flags = getFlags();

  if (!patternValue) return;

  try {
    const regex = new RegExp(patternValue, flags);
    const matches = textValue.match(regex);

    if (matches) {
      const highlightedText = textValue.replace(regex, (match) => `<span class="highlight">${match}</span>`);
      stringToTest.innerHTML = highlightedText;
      testResult.innerText = matches.join(", ");
    } else {
      testResult.innerText = "no match";
    }
  } catch (error) {
    testResult.innerText = "Invalid Regex";
  }
});