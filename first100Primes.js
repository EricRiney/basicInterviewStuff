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


function printNum(cnt) {
    var nums = 0;
    var numPrinted = 0;
    while(numPrinted <= cnt) {
        if (isPrime(nums)) {
            console.log(nums);
            numPrinted++;
        }        
        nums++;
    }   
}
printNum(100);