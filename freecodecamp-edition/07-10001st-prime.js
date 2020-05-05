/* Prime number is not divisible by other prime numbers smaller than itself */

function nthPrime(n) {
  let primes = [2, 3];

  for (let i = 4; !primes[n - 1]; i++) {
    if (primes.every((prime) => i % prime)) {
      primes.push(i);
    }
  }

  return primes[n - 1];
}

console.log(nthPrime(6));
