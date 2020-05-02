function largestPalindromeProduct(n) {
  let palindrome = 1;

  for (let i = 1; i.toString().length <= n; i++) {
    for (let e = 1; e.toString().length <= n; e++) {
      const product = i * e;

      if (
        product == product.toString().split("").reverse().join("") &&
        product > palindrome
      ) {
        palindrome = product;
      }
    }
  }

  return palindrome;
}

console.log(largestPalindromeProduct(2));

console.log(largestPalindromeProduct(3));
