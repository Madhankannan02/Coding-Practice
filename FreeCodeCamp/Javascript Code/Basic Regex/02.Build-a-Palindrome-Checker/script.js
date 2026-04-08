const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkPalindrome = () => {
    const originalText = textInput.value;

    if (originalText === "") {
        alert("Please input a value");
        return;
    }

    const cleanText = originalText.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const reversedText = [...cleanText].reverse().join("");

    const isPalindrome = cleanText === reversedText;

    resultDiv.innerText = `${originalText} ${
        isPalindrome ? "is" : "is not"
    } a palindrome.`;
};

checkBtn.addEventListener("click", checkPalindrome);