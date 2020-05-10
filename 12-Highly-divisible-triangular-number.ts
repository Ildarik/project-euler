let toLoop = true;

let triangleNumber = 28;

for (let i = 8; toLoop; i++) {
  let factors = [];

  for (let x = 1; x <= triangleNumber; x++) {
    if (!(triangleNumber % x)) {
      factors.push(x);
    }
  }

  if (factors.length > 500) {
    toLoop = false;
    console.log(triangleNumber);
  } else {
    triangleNumber += i;
  }
}
