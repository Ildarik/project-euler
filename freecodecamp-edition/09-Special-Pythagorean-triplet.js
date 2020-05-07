function specialPythagoreanTriplet(n) {
  let toLoop = true;

  for (let a = 1; toLoop && a < n; a++) {
    for (let b = a + 1; toLoop && a + b < n; b++) {
      for (
        let c = b + 1;
        a < b && b < c && a < c && a + b + c <= n && toLoop;
        c++
      ) {
        if (a * a + b * b == c * c && a + b + c == n) {
          toLoop = false;
          return a * b * c;
        }
      }
    }
  }
}

specialPythagoreanTriplet(1000);
