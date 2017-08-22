// lil guy finds the prime factors
// O(n)

function primeFactors(n) {
    var factors = [];
    var divisor = 2;
    while (n > 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        }
        else {
            divisor++;
        }
    }
    return factors;
}

console.log(primeFactors(864)); //[3, 23]
