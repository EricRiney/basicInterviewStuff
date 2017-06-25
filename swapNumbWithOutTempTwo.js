// Write a function to swap two numbers without using a temporary variable
// but like use bit manipulation... like a logical conjunction becuase fuck you

function swapNumb(a, b) {
  console.log("a: " + a + " and b: " + b);
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log("a: " + a + " and b: " + b);
}

// > swapNumb(2, 3);
//   = a: 2 and b: 3
//   = a: 3 and b: 2
