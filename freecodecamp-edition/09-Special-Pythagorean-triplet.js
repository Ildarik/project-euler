function specialPythagoreanTriplet(n) {
  for (let a = 1; a < n; a++) {
    for (let b = a + 1; a + b < n; b++) {
      for (let c = b + 1; a < b && b < c && a < c && a + b + c <= n; c++) {
        if (a * a + b * b == c * c && a + b + c == n) {
          return a * b * c;
        }
      }
    }
  }
}

specialPythagoreanTriplet(1000);
