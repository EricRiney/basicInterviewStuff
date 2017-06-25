// Write a function to iteratively calculate the Nth Fibonacci number
// Remember:
// fib(0) = 1
// fib(1) = 1
// fib(n) = fib(n -1) + fib(n - 2)


// O(n)
function fibonacci(n) {
    var fibo = [0, 1];
    if (n <= 2) {
        return 1;
    }
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo[n];
}

// console.log(fibonacci(12)); //144   
