const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for Gold?",
    choices: ["Ag", "Au", "Fe"],
    answer: "Au"
  },
  {
    category: "Geography",
    question: "Which is the largest continent?",
    choices: ["Africa", "Europe", "Asia"],
    answer: "Asia"
  },
  {
    category: "History",
    question: "In which year did World War II end?",
    choices: ["1945", "1918", "1963"],
    answer: "1945"
  },
  {
    category: "Technology",
    question: "What does 'CPU' stand for?",
    choices: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit"],
    answer: "Central Processing Unit"
  },
  {
    category: "Animals",
    question: "What is the fastest land animal?",
    choices: ["Cheetah", "Lion", "Leopard"],
    answer: "Cheetah"
  }
];

function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}