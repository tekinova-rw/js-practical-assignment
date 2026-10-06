const numbers = [12, 7, 25, 3, 18, 9, 30];

// Find the largest number
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

// Find the smallest number
let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}

// Find the sum
let sum = 0;

for (let number of numbers) {
  sum += number;
}

// Calculate the average
const average = sum / numbers.length;

// Numbers greater than 10
const greaterThan10 = numbers.filter(function (number) {
  return number > 10;
});

// Double every number
const doubled = numbers.map(function (number) {
  return number * 2;
});

console.log("Largest:", largest);
console.log("Smallest:", smallest);
console.log("Sum:", sum);
console.log("Average:", average);
console.log("Greater than 10:", greaterThan10);
console.log("Doubled:", doubled);
