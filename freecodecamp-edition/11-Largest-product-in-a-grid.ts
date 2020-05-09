function largestGridProduct(arr) {
  let maxProduct = 0;

  // gorizontally

  arr.map((arr) => {
    for (let i = 0; i < arr.length - 3; i++) {
      const product = arr.slice(i, i + 4).reduce((acc, cur) => (acc *= cur), 1);
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  });

  // vertically

  for (let row = 0; row < arr.length - 3; row++) {
    for (let column = 0; column < arr.length; column++) {
      const product =
        arr[row][column] *
        arr[row + 1][column] *
        arr[row + 2][column] *
        arr[row + 3][column];

      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  // diagonally

  for (let row = 0; row < arr.length - 3; row++) {
    for (let column = 0; column < arr.length - 3; column++) {
      const product =
        arr[row][column] *
        arr[row + 1][column + 1] *
        arr[row + 2][column + 2] *
        arr[row + 3][column + 3];

      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  // another diagonally

  for (let row = 0; row < arr.length - 3; row++) {
    for (let column = 19; column > 2; column--) {
      const product =
        arr[row][column] *
        arr[row + 1][column - 1] *
        arr[row + 2][column - 2] *
        arr[row + 3][column - 3];

      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  return maxProduct;
}
