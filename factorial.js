// Write a function that returns the factorial of a number

function factorial(n) { 
    if(n===0) {
        return 1; 
    } else {
        return n * factorial(n-1);
    } 
}

function fact(n) {
    var s = new Stack(); 
    while(n>1) {
      s.push(n--);
    }
    var product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product; 
}

console.log(factorial(4));