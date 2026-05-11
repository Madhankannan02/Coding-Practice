const generateElement = () => Math.floor(Math.random() * 100) + 1;

const generateArray = () => {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement());
  }
  return arr;
};

const generateContainer = () => document.createElement('div');

const fillArrContainer = (element, arr) => {
  element.innerHTML = '';
  arr.forEach(num => {
    const span = document.createElement('span');
    span.textContent = num;
    element.appendChild(span);
  });
};

const isOrdered = (num1, num2) => num1 <= num2;

const swapElements = (arr, index) => {
  if (!isOrdered(arr[index], arr[index + 1])) {
    const temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
  }
};

const highlightCurrentEls = (element, index) => {
  const children = element.children;
  if (children[index] && children[index + 1]) {
    const style = "2px dashed red";
    children[index].style.border = style;
    children[index + 1].style.border = style;
  }
};

let currentArray = [];
const arrayContainer = document.getElementById('array-container');
const startingArrayDiv = document.getElementById('starting-array');
const generateBtn = document.getElementById('generate-btn');
const sortBtn = document.getElementById('sort-btn');

generateBtn.addEventListener('click', () => {
  const steps = arrayContainer.querySelectorAll('div:not(#starting-array)');
  steps.forEach(step => step.remove());
  currentArray = generateArray();
  fillArrContainer(startingArrayDiv, currentArray);
});

sortBtn.addEventListener('click', () => {
  if (currentArray.length === 0) return;

  let arr = [...currentArray];
  let bubbleArray = [...currentArray];
  
  highlightCurrentEls(startingArrayDiv, 0);

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < bubbleArray.length - 1; i++) {
      const stepDiv = generateContainer();
      
      if (!isOrdered(bubbleArray[i], bubbleArray[i + 1])) {
        swapElements(bubbleArray, i);
        swapped = true;
      }
      
      fillArrContainer(stepDiv, bubbleArray);
      
      let nextHighlight = (i + 1 < bubbleArray.length - 1) ? i + 1 : 0;
      highlightCurrentEls(stepDiv, nextHighlight);
      
      arrayContainer.appendChild(stepDiv);
    }
  } while (swapped);
});