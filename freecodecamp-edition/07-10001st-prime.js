function nthPrime(n) {
  let primes = [];

  for (let i = 2; !primes[n - 2]; i++) {
    for (let b = i - 1; b > 1; b--) {
      if (!(i % b)) {
        break;
      } else if (b == 2) {
        primes.push(i);
      }
    }
  }

  return primes[n - 2];
}
