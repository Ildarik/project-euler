function sumSquareDifference(n) {
  let sumOfSquares = 0;

  let sum = 0;

  for (let number = 1; number <= n; number++) {
    sumOfSquares += number * number;
    sum += number;
  }

  const squareOfSum = sum * sum;

  const difference = squareOfSum - sumOfSquares;
  return difference;
}

sumSquareDifference(100);
