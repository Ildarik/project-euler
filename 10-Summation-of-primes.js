let primes = [2, 3];

for (let i = 4; i < 2000000; i++) {
  if (primes.every((prime) => i % prime)) {
    console.log(i);
    primes.push(i);
  }
}

console.log(primes.reduce((acc, cur) => acc + cur));
