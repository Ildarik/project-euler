let sumOfSquares = 0;

let sum = 0;

for (let number = 1; number <= 100; number++) {
  sumOfSquares += number * number;
  sum += number;
}

const squareOfSum = sum * sum;

const difference = squareOfSum - sumOfSquares;

console.log(difference);
