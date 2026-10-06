function checkNumber(num) {
  if (typeof num !== "number") {
    return "Not a number";
  }

  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(0, checkNumber(0));
console.log(7, checkNumber(7));
console.log(10, checkNumber(10));
console.log(-3, checkNumber(-3));
console.log(15, checkNumber(15));
console.log("hello", checkNumber("hello"));
