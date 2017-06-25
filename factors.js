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

//console.log(primeFactors(69)); //[3, 23]

var x = 6; 
var y = 4; 
var a = function(b) {
    console.log("check"); 
    return function(c) {
        console.log(c);
        console.log(y);
        return y + b + c; 
    } 
}; 
x = 2; 
y = 5; 
var fn = a(x); 
x = 1; 
y = 3; 
var unknown = 9;
console.log(x);
console.log(fn(unknown)); 
