// 1. Greet the user
console.log("Hello! I'm your coding fun fact guide!");

// 2. Create the bot's identity variables
const botName = "Gemini";
const botLocation = "the Cloud";
const favoriteLanguage = "JavaScript";

// 3. Log the bot's intro
console.log("My name is " + botName + " and I live on " + botLocation + ".");

// 4. Log the favorite language
console.log("My favorite programming language is " + favoriteLanguage + ".");

// 5 & 6. Create codingFact with 'let' and log the first fact
let codingFact = favoriteLanguage + " was created in just 10 days by Brendan Eich!";
console.log(codingFact);

// 7 & 8. Reassign codingFact to a second fact and log it
codingFact = "The first version of " + favoriteLanguage + " was actually called Mocha.";
console.log(codingFact);

// 9 & 10. Reassign codingFact to a third fact and log it
codingFact = "Even though it has 'Java' in its name, " + favoriteLanguage + " is completely different from Java.";
console.log(codingFact);

// 11. Log the farewell statement
console.log("It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + ".");