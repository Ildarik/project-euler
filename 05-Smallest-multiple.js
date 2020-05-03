/* Problem 5

Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

let isDone = false;

let starter = 1;

while (!isDone) {
  starter++;

  let divider = 1;

  while (divider <= 20 && !(starter % divider)) {
    if (divider == 20) {
      console.log(starter);
      isDone = true;
    }

    divider++;
  }
}
