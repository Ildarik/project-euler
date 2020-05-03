/* Problem 5

Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

let done = false;

for (let i = 2520; i < 10000000000; i++) {
  if (!done) {
    for (let b = 1; b <= 20; b++) {
      if (i % b) {
        break;
      } else if (!(i % b) && b == 20) {
        console.log(i);
        done = true;
        break;
      }
    }
  }
}
