// Write a function to verify a prime number
// Remember:
// a prime number is only divisible by itself and 1

function isPrime(n) {
  var divisor = 2;
  while (n > divisor) {
    if(n % divisor == 0) {
     return false;
    } else {
      divisor++;
    }
  }
  return true;
}

console.log(isPrime(137));
//   = true
console.log(isPrime(237));
//   = false
