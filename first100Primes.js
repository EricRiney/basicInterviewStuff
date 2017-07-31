// write a damn function to print out the first 100 prime numbers

function isPrime(n) {
    var divisor = 2;
    while (n > divisor) {
        if (n % divisor == 0) {
            return false;
        } else {
            divisor++;
        }
    }
    return true;
}


function printPrime(cnt) {
    console.log("prime");
    var nums = 1;
    var primesPrinted = 0;
    while(primesPrinted < cnt) {
        if (isPrime(nums)) {
            console.log(nums);
            primesPrinted++;
        }        
        nums++;
    }   
}
printPrime(100);