function isLeapYear(year){
  if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    result = `${year} is a leap year.`
  } else {
    result = `${year} is not a leap year.`;
  }
  return result;
}

let year = 2024;
let result = isLeapYear(year);
console.log(result);