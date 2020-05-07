let toLoop = true;

for (let a = 1; toLoop && a < 1000; a++) {
  for (let b = a + 1; toLoop && a + b < 1000; b++) {
    for (let c = b + 1; a < b && b < c && a < c && a + b + c <= 1000; c++) {
      if (a * a + b * b == c * c && a + b + c == 1000) {
        console.log(a * b * c);
        toLoop = false;
        break;
      }
    }
  }
}
