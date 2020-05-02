function reverse(s) {
  return s.split("").reverse().join("");
}

let palindrome = 1;

for (let i = 100; i <= 999; i++) {
  for (let e = 100; e <= 999; e++) {
    const product = i * e;

    if (product == reverse(product.toString()) && product > palindrome) {
      palindrome = product;
    }
  }
}

console.log(palindrome);
