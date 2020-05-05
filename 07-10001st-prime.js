/*

9999 because
1) array index starts from 0
2) we don't have number 2 in our primes array

*/

let primes = [];

for (let i = 2; !primes[10000]; i++) {
  for (let b = i - 1; b > 1; b--) {
    if (!(i % b)) {
      break;
    } else if (b == 2) {
      primes.push(i);
    }
  }
}

console.log(primes[9999]);
