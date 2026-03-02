function maskEmail(email) {
  // 1. Find the position of the "@" symbol to separate the username and domain
  const atIndex = email.indexOf("@");
  console.log(atIndex);
  const username = email.slice(0, atIndex);
  console.log(username);
  const domain = email.slice(atIndex);
  console.log(domain);

  // 2. Identify the first and last characters of the username
  const firstChar = username[0];
  const lastChar = username[username.length - 1];

  // 3. Calculate how many asterisks are needed
  // We subtract 2 because we are keeping the first and last characters
  const maskLength = username.length - 2;
  const mask = "*".repeat(maskLength);

  // 4. Combine everything back together
  return firstChar + mask + lastChar + domain;
}

// Declare the variable outside the function
const email = "apple.pie@example.com";

// Call the function and output the result
console.log(maskEmail(email)); 
// Output: "a*******e@example.com"