// Write a recursive function to iteratively calculate the Nth Fibonacci number
// Remember:
// fib(0) = 1
// fib(1) = 1
// fib(n) = fib(n -1) + fib(n - 2)

// O(n^2)
function fibonacci(n) {
    if (n <= 1)
        return n;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(12)); //144
