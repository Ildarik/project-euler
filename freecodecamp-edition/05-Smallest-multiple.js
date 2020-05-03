function smallestMult(n) {
  let isDone = false;

  let starter = 1;

  while (!isDone) {
    starter++;

    let divider = 1;

    while (divider <= n && !(starter % divider)) {
      if (divider == n) {
        isDone = true;
        return starter;
      }

      divider++;
    }
  }
}

console.log(smallestMult(20));
