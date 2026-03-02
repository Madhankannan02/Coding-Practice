function factorialCalculator (num){
  let result = 1;

  for (let i = 1 ; i <= num; i++){
    result *= i;
  }

  return result;
}

const num = 5;

const factorial = factorialCalculator(num);

let resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);